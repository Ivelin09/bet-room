import { Button } from '@nextui-org/react';

export const Hero = () => {
    return (
        <div
            className='w-full h-96 bg-auto bg-no-repeat bg-fixed start-0 '
            style={{
                backgroundImage: `url('./src/assets/soccertipsters-hero-image.png')`,
            }}
        >
            <div className='flex flex-col justify-center items-end  mr-56 mt-2'>
                <p className='text-lg text-white font-bold uppercase'>
                    Accurate soccer tips
                </p>
                <p className='text-lg text-white font-bold uppercase'>
                    and predictions
                </p>

                <div className='flex flex-row gap-2 justify-end items-center w-full mb-4'>
                    <Button>Check out</Button>
                    <Button>Our services</Button>
                </div>
            </div>
        </div>
    );
};
