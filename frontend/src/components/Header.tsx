import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Header = ({scrollUseRef}: {scrollUseRef: () => void}) => {
	const navigate = useNavigate();

	

	return (
		<div
			className="flex items-start p-8 flex-col justify-center w-full h-[60vh] bg-auto bg-no-repeat bg-cover"
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/footballBackground.webp')`,
			}}
		>
			<h1 className="text-4xl text-white">Welcome to Bet-Room.com: </h1>
			<h1 className="text-4xl text-white">
				Your Gateway to Long-Term Profit in Sports Betting
			</h1>
			<h4 className="text-white mt-2">
				Your ultimate destination for guaranteed profitability in the world of sports wagering
			</h4>
			<div className='flex flex-row gap-2 mt-4'>
				<Button
					variant="shadow"
					color="primary"
                    radius='md'
					className='uppercase'
					onPress={scrollUseRef}
				>
					check the oods
				</Button>
				<Button
					variant="shadow"
					color="primary"
                    radius='md'
					className="uppercase"
					onPress={() => navigate('/about-us')}
				>
					intro
				</Button>
			</div>
		</div>
	);
};

export default Header;
