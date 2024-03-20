import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { loginUser } from '../api/requests';

export const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authenticateUser = useAuth();

    const handleSubmit = async () => {
        console.log('ran');
        
        try {
            if (!username || !password)
                throw new Error('Please fill in all the fields');
            setLoading(true);
            const response = await loginUser(username, password);
            await authenticateUser(response);
        } catch (err: any) {
            // toast({
            //     title: err.message,
            //     variant: 'destructive',
            // });
        }
        setLoading(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh', // Set the height of the div to 100% of the viewport height
            }}
        >
            <h1 className='text-3xl mb-5'>Login</h1>
            <Input
                type='username'
                label='Username'
                placeholder='Enter your username'
                className='max-w-xs mb-5'
                value={username}
                onValueChange={setUsername}
            />
            <Input
                type='password'
                label='Password'
                placeholder='Enter your password'
                className='max-w-xs mb-5'
                value={password}
                onValueChange={setPassword}
            />
            <Button color='primary' onPress={() => handleSubmit()}>
                Login
            </Button>
        </div>
    );
};
