import { Link } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className='rounded-lg  m-4'>
            <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <a
                        href='https://bet-room.com/'
                        className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
                    >
                        <img
                            src="./src/assets/logo.webp"
                            className='h-8 w-8 rounded-large'
                            alt='Bet Room Logo'
                        />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                            Bet Room
                        </span>
                    </a>
                    <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
                        <li>
                            <Link
                                className='hover:underline cursor-pointer me-4 md:me-6 text-gray-500 text-sm font-medium'
                                onPress={() => navigate('/about-us')}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:underline cursor-pointer me-4 md:me-6 text-gray-500 text-sm font-medium'
                                onPress={() =>
                                    navigate('/privacy-and-cookie-policy')
                                }
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:underline cursor-pointer me-4 md:me-6 text-gray-500 text-sm font-medium'
                                onPress={() => navigate('/no-refund-policy')}
                            >
                                No Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:underline cursor-pointer me-4 md:me-6 text-gray-500 text-sm font-medium'
                                onPress={() => navigate('/contact-us')}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:underline cursor-pointer me-4 md:me-6 text-gray-500 text-sm font-medium'
                                onPress={() =>
                                    navigate('/terms-and-conditions')
                                }
                            >
                                Terms and Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 cursor-pointer sm:mx-auto dark:border-gray-700 lg:my-8' />
                <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                    © 2024{' '}
                    <a href='https://bet-room.com/' className='hover:underline'>
                        Bet Room™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
