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
	const menuItems = [
			{ label: 'Home', link: '/' },
			{ label: 'About Us', link: '/about-us' },
			{ label: 'Contact Us', link: '/contact-us' },
			{ label: 'Betting Archive', link: '/archive' },
	];
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			isBordered
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand onClick={() => navigate('/')}>
					<p className="font-bold cursor-pointer text-inherit">
						BETROOM
					</p>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex gap-4"
				justify="end"
			>
				{
                    menuItems.map((item: itemI, idx : number) => (
                        <NavbarItem key={`${item}-${idx}`}>
                            <Link
                                className="cursor-pointer"
                                size="lg"
                                color="foreground"
                                href={item.link}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))
                }
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item: itemI, idx : number) => (
					<NavbarMenuItem key={`${item}-${idx}`}>
						<Link
							className="w-full cursor-pointer"
							size="lg"
							color="foreground"
                            href={item.link}
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				{/* {menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							
							size="lg"
                            color='foreground'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))} */}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavBar;

interface itemI {
    label: string;
    link: string;
}