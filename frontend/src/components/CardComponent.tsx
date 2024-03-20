import {
    Card,
    CardBody,
    CardFooter,
    Link,
    Button,
    Divider,
} from '@nextui-org/react';

export const CardComponent = ({
    title,
    text,
    price,
    setCheckout,
    onOpen,
    setCartItem,
}: {
    title: string;
    text: string;
    price: number;
    setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
    onOpen: () => void;
    setCartItem: React.Dispatch<React.SetStateAction<{title: string, price: number}>>;
}) => {
    return (

        
        <Card className='sm:w-2/12 w-full py-2 '>
            <CardBody className='flex flex-col gap-4'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-3xl uppercase '>{title} odds</p>
                    <p className='text-lg uppercase'>combo</p>
                </div>
                <Divider
                    orientation='horizontal'
                    className='bg-white text-white'
                />
                <div className='flex flex-col justify-center items-center text-md'>
                    <p>{text}</p>
                    <p>based on 1x2 0/4</p>
                    <p>AH, BTTS and etc.</p>
                    <p>Suitable for Beginners</p>
                    <p>24/7 service</p>
                    <p>Genuine Activities</p>
                    <Link className='font-bold text-red-600 uppercase text-lg cursor-pointer'>
                        no refund!
                    </Link>
                </div>
                <Divider
                    orientation='horizontal'
                    className='bg-white text-white'
                />

                {/* <p className="font-bold text-red-600 uppercase text-lg">no refund!</p> */}
            </CardBody>
            <CardFooter>
                <div className='flex flex-col gap-3 justify-center items-center w-full'>
                    <Button
                        color='primary'
                        variant='shadow'
                        onClick={() => {
                            setCheckout(true);
                            onOpen();
                            setCartItem({title: title, price: price});
                        }}
                        radius='lg'
                        className='uppercase'
                    >
                        buy now {price}€
                    </Button>
                    <Button
                        color='primary'
                        variant='shadow'
                        radius='lg'
                        className='uppercase'
                    >
                        archives
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};
