import { useDisclosure } from '@nextui-org/react';
import { CardComponent } from '../components/CardComponent';
import { useRef, useState } from 'react';
import Paypal from '../components/Paypal';
import Header from '../components/Header';
import HelloSection from '../components/HelloSection';
import AccordionComponent from '../components/AccordionComponent';
import '../styles/homeStyles.css';

const Home = () => {
    const [checkout, setCheckout] = useState<boolean>(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [cartItem, setCartItem] = useState({
        title: '',
        price: 0,
    });
    const scrollRef = useRef();

    const scrollUseRef = () => {
        scrollRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    return (
        <div>
            {/* <Hero></Hero> */}
            {/* background-image: url('http://192.168.0.101:5000/src/assets/football.jpg'), */}
            <Header scrollUseRef={scrollUseRef} />
            <HelloSection />
            <div ref={scrollRef} className='flex flex-col sm:flex-row gap-4 w-full p-4 justify-center font-bold '>
                <CardComponent
                    title='10'
                    text='3 - 4 matches combo'
                    price={99}
                    setCheckout={setCheckout}
                    onOpen={onOpen}
                    setCartItem={setCartItem}
                    color='manqk'
                ></CardComponent>
                <CardComponent
                    title='20'
                    text='4 - 5 matches combo'
                    price={149}
                    setCheckout={setCheckout}
                    onOpen={onOpen}
                    setCartItem={setCartItem}
                    color='gradienta'
                ></CardComponent>
                <CardComponent
                    title='50'
                    text='5 - 6 matches combo'
                    price={288}
                    setCheckout={setCheckout}
                    onOpen={onOpen}
                    setCartItem={setCartItem}
                    color='manqk2'
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
            <AccordionComponent />

        </div>
    );
};

export default Home;
