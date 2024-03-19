import { Button, Divider, Link } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
	const navigate = useNavigate();
	return (
		<div className="sm:w-[1170px] md:w-[80%] w-[90%] my-[50px] mx-auto py-[60px] flex flex-col gap-8 ">
			<div>
				<h1 className="sm:text-4xl text-2xl font-bold mb-[20px] ">
					Our Commitment to You
				</h1>
				<p className="text-lg">
					At Bet-Room.com, we're committed to your success and
					satisfaction. Our mission is to empower you to make informed
					betting decisions and achieve long-term financial stability
					through sports wagering. With our proven track record and
					dedication to excellence, you can trust <HomeLink /> to be
					your partner in profitability.
				</p>
			</div>
			<div>
				<h1 className="sm:text-4xl text-2xl font-bold mb-[20px] ">
					Ready to Get Started?
				</h1>
				<p className="text-lg">
					Join the thousands of satisfied bettors who have already
					experienced the benefits of <HomeLink />. Sign up today to
					gain access to our exclusive betting combos and start your
					journey towards guaranteed long-term profit.
				</p>
				<p className="text-lg">
					Remember, success in sports betting isn't about luck – it's
					about strategy, analysis, and smart decision-making. With
					Bet-Room.com by your side, you can bet with confidence,
					knowing that you're investing in a brighter financial
					future.
				</p>
				<p className="text-lg">
					Don't leave your profits to chance. Choose <HomeLink /> and
					start winning consistently today!
				</p>
			</div>
		</div>
	);
};

export default AboutUs;

const HomeLink = () => {
	const navigate = useNavigate();

	return (
		<>
			{` `}
			<Link
				color="foreground"
				className="cursor-pointer"
				underline="hover"
				onPress={() => navigate('/')}
			>
				<strong>BetRoom.com</strong>
			</Link>
			{` `}
		</>
	);
};
