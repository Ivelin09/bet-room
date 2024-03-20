import { useSignIn } from 'react-auth-kit';

// Custom hook
export const useAuth = () => {
    const signIn = useSignIn();

    const authenticateUser = async (data: any) => {
        try {
            signIn({
                token: data.accessToken,
                expiresIn: 9999, // change this later
                tokenType: 'Bearer',
                authState: data,
            });
            return true;
        } catch (err) {
            throw err;
        }
    };

    return authenticateUser;
};
