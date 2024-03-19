import { Divider, Link } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

	return (
		<div className="flex flex-row gap-2 justify-center items-center w-full mt-4">
			<Link
				color="primary"
				underline="hover"
				className="font-bold uppercase text-lg cursor-pointer"
			>
				about us
			</Link>
			<Divider
				orientation="vertical"
				className="h-6"
			/>
			<Link
				color="primary"
				underline="hover"
				onPress={() => navigate('/terms-and-conditions')}
				className="font-bold uppercase text-lg cursor-pointer"
			>
				T & C
			</Link>
			<Divider
				orientation="vertical"
				className="h-6"
			/>
			<Link
				color="primary"
				underline="hover"
				className="font-bold uppercase text-lg cursor-pointer"
			>
				no refund policy
			</Link>
			<Divider
				orientation="vertical"
				className="h-6"
			/>
			<Link
				color="primary"
				underline="hover"
				onClick={() => navigate('/privacy-and-cookie-policy')}
				className="font-bold uppercase text-lg cursor-pointer"
			>
				privacy
			</Link>
			<Divider
				orientation="vertical"
				className="h-6"
			/>
			<Link
				color="primary"
				underline="hover"
				className="font-bold uppercase text-lg cursor-pointer"
			>
				contact us
			</Link>
		</div>
	);
};

export default Footer;
