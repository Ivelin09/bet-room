
import Email from '../models/email';

export async function sendMail(sender: string, message: string) {
    const email = new Email({
        sender,
        subject: 'New email from betroom',
        text: message,
    });
    await email.save();

}
