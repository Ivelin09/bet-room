import { Button, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const HelloSection = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="sm:w-[1170px] md:w-[80%] w-[90%] my-[50px] mx-auto py-[60px] ">
				<h1 className="sm:text-4xl text-2xl font-bold mb-[20px] ">
					Welcome to Bet-Room.com: Your Gateway to Long-Term Profit in
					Sports Betting
				</h1>
				<div className="flex sm:flex-row flex-col gap-4 justify-center items-center w-full">
					<p className="text-lg">
						Are you tired of uncertain outcomes in sports betting?
						Have you been seeking a reliable avenue to secure
						long-term profits? Look no further than Bet-Room.com,
						your ultimate destination for guaranteed profitability
						in the world of sports wagering.
					</p>
					<Divider orientation="vertical" className="sm:block hidden h-24" />
					<p className="text-lg">
						At Bet-Room.com, we understand the challenges and risks
						associated with sports betting. That's why we've
						meticulously crafted a range of betting combos designed
						to offer you not just short-term wins, but sustainable,
						long-lasting profits.
					</p>
				</div>
				<div className="flex justify-end items-center w-full pr-8 mt-4">
					<Button color="primary" radius="full" variant="shadow" className=""onPress={() => navigate('/about-us')}>Learn More</Button>
				</div>
			</div>
		</>
	);
};

export default HelloSection;
