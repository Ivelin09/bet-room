
import { Context, Hono } from 'hono';
import { sendMail } from '../../util/nodemailer';

const router = new Hono();

interface EmailPayload {
    sender: string;
    message: string;
}

// router to handle user login
router.post('/mail', async (c: Context) => {
    const {sender, message} = await c.req.json<EmailPayload>(); // get the request body with Email interface  
    if (!sender || !message) { // check if the required fields are missing
        return c.json({ error: 'Missing required fields' }, 400); // return error
    }
    // send the mail
    await sendMail(sender, message);
    return c.json("Email sent", 200); // return result
});

export default router;
