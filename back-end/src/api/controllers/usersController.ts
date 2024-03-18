import { UserPayload } from '../../interfaces/Auth';
import {
    loginUser,
} from '../services/auth';
import { Context, Hono } from 'hono';

const router = new Hono();


router.post('/login', async (c: Context) => {
    const reqBody = await c.req.json<UserPayload>();
    if (!reqBody.username || !reqBody.password) {
        return c.json({ error: 'Missing required fields' }, 400);
    }
    const result = await loginUser(reqBody);
    return c.json(result, 200);
});

export default router;
