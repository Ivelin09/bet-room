import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { AuthContext, ISession, IUser, UserPayload } from '../../interfaces/Auth';
import User from '../../models/user';

const JWT_SECRET = process.env.JWT_SECRET || 'process.env.JWT_SECRET;'; // braking change


async function findUser(query: { username: string}): Promise<IUser | null> {
    return User.findOne<IUser>(query)
}

async function loginUser(userPayload: UserPayload) {
    const user = await findUser({ username: userPayload.username });

    if (!user) {
        throw new Error('User not found');
    }

    await validatePassword(userPayload.password, user.hashedPassword);

    return createSession(user);
}

function checkAuthorization(c: AuthContext): ISession {
    if (c.user) {
        return c.user;
    } else {
        throw new Error('Unauthorized');
    }
}

function createSession(user: IUser): ISession {
    return {
        accessToken: jsonwebtoken.sign({ _id: user._id }, JWT_SECRET),
    };
}

function verifySession(token: string): ISession {
    const decodedData = jsonwebtoken.verify(token, JWT_SECRET) as ISession;

    return {
        ...decodedData,
        accessToken: token,
    };
}

async function validatePassword(inputPassword: string, storedPassword: string) {
    const match = await bcrypt.compare(inputPassword, storedPassword);
    if (!match) {
        throw new Error('Invalid password');
    }
}

async function createAdminAcc() {
    const hashedPassword = await bcrypt.hash("tv9Mym!5AF[Z", 10)
    const user = new User({
        username: "admin",
        hashedPassword: hashedPassword,
    });
    await user.save();
    console.log('Admin account created');
    
}

export {
    loginUser,
    verifySession,
    checkAuthorization,
};
