import {
    Card,
    CardBody,
    CardFooter,
    Link,
    Button,
    Divider,
} from '@nextui-org/react';
import { CardComponent } from '../components/CardComponent';

const Home = () => {
    return (
        <div
            className='sm:h-[90vh] h-full flex flex-col justify-center items-center bg-auto bg-no-repeat bg-fixed'
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/football.jpg')`,
            }}
        >
            {/* background-image: url('http://192.168.0.101:5000/src/assets/football.jpg'), */}
            <div className='flex flex-col sm:flex-row gap-4 w-full p-4 justify-center font-bold '>
                <CardComponent
                    title='10'
                    text='3 - 4 matches combo'
                    price={99}
                ></CardComponent>
                <CardComponent
                    title='20'
                    text='4 - 5 matches combo'
                    price={149}
                ></CardComponent>
                <CardComponent
                    title='50'
                    text='5 - 6 matches combo'
                    price={288}
                ></CardComponent>
            </div>
            <div className='flex flex-row gap-2 justify-center items-center w-full mt-4'>
                <Link
                    color='primary'
                    underline='hover'
                    className='font-bold uppercase text-lg cursor-pointer'
                >
                    about us
                </Link>
                <Divider orientation='vertical' className='h-6' />
                <Link
                    color='primary'
                    underline='hover'
                    className='font-bold uppercase text-lg cursor-pointer'
                >
                    T & C
                </Link>
                <Divider orientation='vertical' className='h-6' />
                <Link
                    color='primary'
                    underline='hover'
                    className='font-bold uppercase text-lg cursor-pointer'
                >
                    no refund policy
                </Link>
                <Divider orientation='vertical' className='h-6' />
                <Link
                    color='primary'
                    underline='hover'
                    className='font-bold uppercase text-lg cursor-pointer'
                >
                    privacy
                </Link>
                <Divider orientation='vertical' className='h-6' />
                <Link
                    color='primary'
                    underline='hover'
                    className='font-bold uppercase text-lg cursor-pointer'
                >
                    contact us
                </Link>
            </div>
        </div>
    );
};

export default Home;
