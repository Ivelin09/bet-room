import { Context, Hono } from 'hono';
import { checkAuthorization } from '../services/auth';
import Archive from '../../models/archive';

const router = new Hono();

export interface Payload {
    date: string;
    match: string;
    tip: string;
    odd: number;
    result: "win" | "lose";
}

router.get('/get', async (c: Context) => {
    const archives = await Archive.find();
    return c.json(archives, 200);
});
// router to handle user login
router.post('/add', async (c: Context) => {
    checkAuthorization(c);
    const { date, match, tip, odd, result } = await c.req.json<Payload>();
    const archive = new Archive({ date, match, tip, odd, result });
    await archive.save();
    return c.json(archive, 200);
});

router.post('/remove', async (c: Context) => {
    checkAuthorization(c);
    const { id } = await c.req.json();
    await Archive.findByIdAndDelete(id);
    return c.json('Success', 200);
});

export default router;
