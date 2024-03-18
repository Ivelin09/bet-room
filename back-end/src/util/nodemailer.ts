import Email from "../models/email";
import { EmailPayload } from "../api/controllers/supportController";
import { Recipient, EmailParams, MailerSend, Sender } from "mailersend";

const mailerSend = new MailerSend({
	apiKey: `mlsn.28de22e6a39c9b4c34b0f4d17886a2bce95e7140bcf3a41d3fa48644ddfcdf4a`,
});

export async function sendMail(
	name: EmailPayload["name"],
	email: EmailPayload["email"],
	message: EmailPayload["message"]
) {
	const recipient = [new Recipient("just.frenzy22@gmail.com", "Petar Yankov")];
	const sendFrom = new Sender(
		"info@trial-351ndgwkj15gzqx8.mlsender.net",
		"Contact Us Team"
	);

	const emailParams = new EmailParams()
		.setFrom(sendFrom)
		.setTo(recipient)
		.setReplyTo(sendFrom)
		.setSubject("Contact Us")
		.setHtml(
			`
    <div>
        <p>Name: <b>${name}</b></p>
        <p>Email: <b>${email}</b></p>
        <p>Message: ${message}</p>
    </div>
    `
		)
		.setText(`Response from User: ${name}, Email: ${email}`);

	mailerSend.email.send(emailParams);
}
