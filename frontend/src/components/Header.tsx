import { Button } from '@nextui-org/react';

const Header = () => {
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
				nqkyw pulnej Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Eos itaque consequuntur minus non iste vel impedit omnis
				quos quam culpa.
			</h4>
			<div className='flex flex-row gap-2 mt-4'>
				<Button
					variant="shadow"
					color="primary"
                    radius='full'
					className="uppercase"
				>
					check the oods
				</Button>
				<Button
					variant="shadow"
					color="primary"
                    radius='full'
					className="uppercase"
				>
					intro
				</Button>
			</div>
		</div>
	);
};

export default Header;
