import { Context } from 'hono';

export interface AuthContext extends Context {
    user?: ISession;
}

export interface IUser {
    _id: string;
    username: string;
    hashedPassword: string;
}

export interface ISession {
    accessToken: string;
}

export interface UserPayload {
    username: string;
    password: string;
}