import { Divider, Link } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="sm:w-[1170px] md:w-[80%] w-[90%] my-[50px] mx-auto py-[60px] sm:px-[50px] px-[20px]">
			<div className=" flex flex-col w-full justify-center gap-8 ">
				<div className="flex flex-row w-full justify-between gap-8">
					<div>
						<h1 className="font-bold cursor-pointer uppercase text-inherit">
							BetRoom
						</h1>
					</div>
					<div className="flex flex-row gap-2">
						<div className="flex sm:flex-row flex-col gap-2">
							<Link
								color="primary"
								underline="hover"
								className="font-bold uppercase text-md cursor-pointer"
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
						</div>

						<div className="flex sm:flex-row flex-col gap-2">
							<Link
								color="primary"
								underline="hover"
								onClick={() =>
									navigate('/privacy-and-cookie-policy')
								}
								className="font-bold uppercase text-md cursor-pointer"
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
								onClick={() => navigate('/contact-us')}
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
