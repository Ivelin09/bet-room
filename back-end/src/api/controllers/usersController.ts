import { UserPayload } from '../../interfaces/Auth';
import {
    loginUser,
} from '../services/auth';
import { Context, Hono } from 'hono';

const router = new Hono();

// router to handle user login
router.post('/login', async (c: Context) => {
    const reqBody = await c.req.json<UserPayload>(); // get the request body with UserPayload interface
    if (!reqBody.username || !reqBody.password) {
        return c.json({ error: 'Missing required fields' }, 400);
    }
    const result = await loginUser(reqBody); // call login fucntion
    return c.json(result, 200); // return result
});

export default router;
