import { Link, Divider, useDisclosure } from '@nextui-org/react';
import { CardComponent } from '../components/CardComponent';
import { useState } from 'react';
import Paypal from '../components/Paypal';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import AccordionComponent from '../components/Accordion';
import HelloSection from '../components/HelloSection';
import { Archive } from '../components/Archive';

const Home = () => {
    const [checkout, setCheckout] = useState<boolean>(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [cartItem, setCartItem] = useState({
        title: '',
        price: 0,
    });
    const navigate = useNavigate();

    return (
        <div>
            {/* <Hero></Hero> */}
            {/* background-image: url('http://192.168.0.101:5000/src/assets/football.jpg'), */}
            <Header />
            <HelloSection />
            <AccordionComponent />
            <Divider />
            <Archive />

            <div className='flex flex-col sm:flex-row gap-4 w-full p-4 justify-center font-bold '>
                <CardComponent
                    title='10'
                    text='3 - 4 matches combo'
                    price={99}
                    setCheckout={setCheckout}
                    onOpen={onOpen}
                    setCartItem={setCartItem}
                ></CardComponent>
                <CardComponent
                    title='20'
                    text='4 - 5 matches combo'
                    price={149}
                    setCheckout={setCheckout}
                    onOpen={onOpen}
                    setCartItem={setCartItem}
                ></CardComponent>
                <CardComponent
                    title='50'
                    text='5 - 6 matches combo'
                    price={288}
                    setCheckout={setCheckout}
                    onOpen={onOpen}
                    setCartItem={setCartItem}
                ></CardComponent>
                {checkout && (
                    <Paypal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        checkout={checkout}
                        setCheckout={setCheckout}
                        cartItem={cartItem}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
