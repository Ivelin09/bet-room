import { Archive } from '../components/Archive';
import { AddArchiveModal } from '../components/AddArchiveModal';
import { useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { LoginPage } from './Login.page';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

export const AdminPage = () => {
    const isAuth = useIsAuthenticated();
    const logOut = useSignOut();
    const [archives, setArchives] = useState([] as any);

    return (
        <>
            {isAuth() && (
                <div>
                    <Archive archives={archives} setArchives={setArchives} />
                    <AddArchiveModal setArchives={setArchives} />
                    <Button
                        color='danger'
                        className='ml-2'
                        onClick={() => {
                            logOut();
                        }}
                    >
                        Logout
                    </Button>
                </div>
            )}
            {!isAuth() && <LoginPage />}
        </>
    );
};
