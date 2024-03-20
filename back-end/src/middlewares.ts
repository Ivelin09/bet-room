import { Next } from 'hono';
import { AuthContext } from './interfaces/Auth';
import { verifySession } from './api/services/auth';

export async function authHeader(c: AuthContext, next: Next) {
    const token = c.req.header('x-authorization');
    try {
        if (token) {
            const userData = verifySession(token.toString());
            c.user = userData;
        }
        await next();
    } catch (err) {
        c.json(
            {
                message: 'Invalid access token. Please sign in',
            },
            400
        );
        await next();
    }
}
