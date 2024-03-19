import { Link } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const TandC = () => {
	return (
		<div className="sm:w-[1170px] md:w-[80%] w-[90%] mx-auto py-[60px] ">
			<div className="flex justify-center items-center w-full mb-[55px] ">
				<h1 className="leading-10 text-3xl">Terms and Conditions</h1>
			</div>
			<div className="flex flex-col gap-[15px] ">
				<p>
					This website is an online service of{' '}
					<strong>Bet Room LTD</strong>
					{` `}registered at ul. Orhideya 24, et. 4, 9010 Varna,
					Bulgaria.
				</p>
				<p>
					All our customers must be over 18 years of age to place a
					bet and use our services.
					<HomeLink />
					reserves the right to ask for proof of age from any customer
					and suspend their account until satisfactory documentation
					is provided.
					<HomeLink />
					takes its responsibilities in respect of underage and
					responsible gambling very seriously.
				</p>
				<p>
					All results of previous tips are provided on an advisory
					basis only, and while all possible care and effort are
					placed into ensuring the correct recording and reporting of
					results small human errors may occur. Feel free to contact
					<ContactLink>our team</ContactLink> if you believe any of
					the figures are incorrect and we will double check as
					quickly as possible.
				</p>
				<p>
					<HomeLink /> is not responsible for your losses and wins
					during the cooperation with you in any form.
				</p>
				<p>
					<HomeLink /> is a platform for betting tips and advices and
					can’t guarantee you any form of profit and money.
				</p>
				<p>
					Your betting strategy is only your responsibility and we
					can’t be responsible for your decisions.
				</p>
				<p>Your payment can’t be returned or refunded.</p>
				<p>You are paying only for our pieces of advice.</p>
				<p>
					We are not responsible for the actions of the users or any
					other persons who make a payment via Paypal or Skrill with
					the account of our clients and users.
				</p>
				<p>
					<HomeLink /> is not responsible for unauthorized payments
					and can´t refund the money of it, even if the buyer claims
					it.
				</p>
				<p>
					All of the information on <HomeLink /> can be changed at any
					time without the need to inform the users or anyone else.
				</p>
				<p>
					Our tips and pieces of advice can only help you to improve
					your results. We don’t force you in any way to follow our
					tips or make a payment for those. It’s all your decision to
					buy our services and make the bets the way you do.
				</p>
				<p>
					Don’t make any bets if you are mentally not healthy or you
					are under alcohol and drugs influence. For all of your bad
					or good decision, you and only you are responsible.
				</p>
				<p>
					Don’t make bets with the amount of money which is bigger
					than that what you can afford.
				</p>
				<p>
					When your payment is made, you accept our conditions and
					terms and you can’t change the terms of the deal.
				</p>
				<p>There is no free replacement for our services.</p>
				<p>There is no free of charge trial of our services.</p>
				<p>
					When using <HomeLink /> website now or at any time in the
					future, you agree with these terms and conditions. If you do
					not agree to our terms, please exit our web-page. We reserve
					the right to change these terms at any time and you should
					check regularly to ensure that you are aware of all changes.
				</p>
			</div>
		</div>
	);
};

export default TandC;

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

const ContactLink = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();

	return (
		<>
			{` `}
			<Link
				color="foreground"
				className="cursor-pointer"
				underline="hover"
				onPress={() => navigate('/contact-us')}
			>
				<strong>{children}</strong>
			</Link>
			{` `}
		</>
	);
};
