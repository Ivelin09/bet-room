import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';

const NavBar = () => {
	return (
		<Navbar>
			<NavbarContent>
				<NavbarBrand>
					<div className="flex justify-center items-center w-full">
						<h1>Accurate Soccer Analysis and Predictions</h1>
					</div>
				</NavbarBrand>
			</NavbarContent>
		</Navbar>
	);
};

export default NavBar;
