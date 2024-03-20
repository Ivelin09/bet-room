import { Divider, Image, Link } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="sm:w-[1170px] md:w-[80%] w-[90%] my-[10px] mx-auto   px-[20px]">
			{/* sm:px-[50px]  py-[60px]*/}
			<div className=" flex flex-col w-full justify-center gap-8 ">
				<div className="flex flex-row w-full justify-between gap-8">
					<div>
						<div className="font-bold cursor-pointer text-inherit flex flex-col sm:flex-row gap-2 justify-center items-center">
							<Image
								src="./src/assets/logo.webp"
								className="w-8"
							/>
							<p>BETROOM</p>
						</div>
					</div>
					<div className="flex flex-row gap-2">
						<div className="flex sm:flex-row flex-col gap-2">
							<Link
								color="primary"
								underline="hover"
								className="font-bold uppercase text-md cursor-pointer"
								onPress={() => navigate('/about-us')}
							>
								about us
							</Link>
							<Divider
								orientation="vertical"
								className="h-6 sm:block hidden"
							/>
							<Link
								color="primary"
								underline="hover"
								onPress={() =>
									navigate('/terms-and-conditions')
								}
								className="font-bold uppercase text-md cursor-pointer"
							>
								Terms and Conditions
							</Link>
							<Divider
								orientation="vertical"
								className="h-6 sm:block hidden"
							/>
							<Link
								color="primary"
								underline="hover"
								onPress={() => navigate('/no-refund-policy')}
								className="font-bold uppercase text-md cursor-pointer"
							>
								No Refund Policy
							</Link>
							<Divider
								orientation="vertical"
								className="h-6 sm:block hidden"
							/>
						</div>

						<div className="flex sm:flex-row flex-col gap-2">
							<Link
								color="primary"
								underline="hover"
								className="font-bold uppercase text-md cursor-pointer"
								onPress={() =>
									navigate('/privacy-and-cookie-policy')
								}
							>
								privacy
							</Link>
							<Divider
								orientation="vertical"
								className="h-6 sm:block hidden"
							/>
							<Link
								color="primary"
								underline="hover"
								className="font-bold uppercase text-md cursor-pointer"
								onPress={() => navigate('/contact-us')}
							>
								contact us
							</Link>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center">
					<p>© 2024 BetRoom™</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

/* 
{/* <Link
					color="primary"
					underline="hover"
					className="font-bold uppercase text-md cursor-pointer"
				>
					no refund policy
				</Link>
				<Divider
					orientation="vertical"
					className="h-6"
				/> 
*/
