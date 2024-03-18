import nodemailer from 'nodemailer';

const to = 'dingi7@abv.bg';

const transport = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587,
    auth: {
        user: 'api',
        pass: 'efb0917237dfc8e76ae021439b048330',
    },
});

export async function sendMail(sender: string, message: string) {
    // send mail with defined transport object
    const info = await transport.sendMail({
        from: sender, // sender address
        to: `${to}`, // list of receivers
        subject: "Contact us email", // Subject line
        text: message
        // html: html, // html body
    });

    console.log('Message sent: %s', info.messageId);
}
