import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { sendMail } from '../api/requests';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formSubmit = async () => {
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
        <div>
            <Input
                isRequired
                type='email'
                label='Email'
                variant='bordered'
                placeholder='Enter your email'
                className='max-w-s'
                value={email}
                onValueChange={setEmail}
            />
            <Input
                isRequired
                type='name'
                label='Name'
                variant='bordered'
                placeholder='Enter your name'
                className='max-w-s'
                value={name}
                onValueChange={setName}
            />
            <Textarea
                isRequired
                label='Message'
                placeholder='Enter your message'
                className='max-w-s'
                value={message}
                onValueChange={setMessage}
            />
            <Button onClick={formSubmit}>Send</Button>
        </div>
    );
};
