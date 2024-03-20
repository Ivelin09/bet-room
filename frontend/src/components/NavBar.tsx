import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const menuItems = ['Features', 'Customers', 'Integrations'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (

        <Navbar isBordered position='static' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='sm:hidden'
                />
            </NavbarContent>
            <NavbarBrand onClick={() => navigate('/')}>
                <p className='font-bold cursor-pointer text-inherit'>BETROOM</p>
            </NavbarBrand>
            <NavbarContent className='hidden sm:flex gap-4' justify='end'>
                <NavbarItem>
                    <Link color='foreground' href='#'>
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href='#' aria-current='page'>
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground' href='#'>
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? 'primary'
                                    : index === menuItems.length - 1
                                    ? 'danger'
                                    : 'foreground'
                            }
                            className='w-full'
                            href='#'
                            size='lg'
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
