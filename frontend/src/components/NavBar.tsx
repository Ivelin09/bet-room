import { Navbar, NavbarBrand } from '@nextui-org/react';

const NavBar = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<div className='flex justify-center items-center w-full'>
					<h1 className=''>Acccurate Soccer Analysis And Predictions</h1>
				</div>
			</NavbarBrand>
		</Navbar>
	);
};

export default NavBar;
