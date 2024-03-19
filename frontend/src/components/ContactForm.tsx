import { Button, Checkbox, Input, Link, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { sendMail } from '../api/requests';
import { useNavigate } from 'react-router-dom';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const formSubmit = async (e : { preventDefault: () => void }) => {
        e.preventDefault();
		try {
			if (!name || !email || !message) {
				throw new Error();
			}
			await sendMail(name, email, message);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<div className="flex flex-col gap-4 p-4 px-8">
			<form onSubmit={formSubmit}>
				<Input
					isRequired
					isClearable
					type="email"
					label="Email"
					variant="underlined"
					// placeholder='Enter your email'
					className="max-w-s"
					value={email}
					onValueChange={setEmail}
				/>
				<Input
					isRequired
					isClearable
					type="name"
					label="Name"
					variant="underlined"
					// placeholder='Enter your name'
					className="max-w-s"
					value={name}
					onValueChange={setName}
				/>
				<Textarea
					isRequired
					label="Message"
					variant="underlined"
					// placeholder='Enter your message'
					className="max-w-s"
					value={message}
					onValueChange={setMessage}
				/>
				<p className='my-4'>
					<Checkbox isRequired />I consent to my data being processed in line
					with the guidelines set out in the{' '}
					<Link
						underline="always"
						color="foreground"
						target="_blank"
						onPress={() => navigate('/privacy-and-cookie-policy')}
						className="cursor-pointer"
					>
						Privacy Policy
					</Link>
					.
				</p>
				<Button
					type="submit"
					color="primary"
					variant="shadow"
					className="rounded-full w-[80%] mx-auto "
				>
					Send
				</Button>
			</form>
		</div>
	);
};
