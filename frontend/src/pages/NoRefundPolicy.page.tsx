import { Link } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoRefundPolicy = () => {
    useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	const navigate = useNavigate();

	return (
		<div className="sm:w-[1170px] md:w-[80%] w-[90%] mx-auto py-[60px] ">
			<div className="flex justify-center items-center w-full mb-[55px] ">
				<Title>No Refund Policy</Title>
			</div>
			<div className="flex flex-col gap-[15px] ">
				<p>
					This No Refund Policy was last revised on 9th November,
					2023.
				</p>
				{/* <h2 className="my-[20px] text-xl font-bold ">About Us</h2> */}
				<p>
					Overview At <HomeLink />, we are committed to
					offering our users a fair, transparent, and enjoyable online
					betting experience. We encourage responsible gambling and
					provide numerous resources to support our users in making
					informed decisions. Due to the nature of online betting and
					the real-time processing of wagers, we maintain a strict No
					Refund Policy. By participating in any betting activity on
					our platform, users agree to this policy.
				</p>
				<List>
					<li>
						<strong>No Refunds</strong>:
						<br /> All bets placed on <HomeLink /> are final.
						Once a bet is made and confirmed by the user, it cannot
						be altered, cancelled, or refunded under any
						circumstances. This includes, but is not limited to,
						bets made by mistake, bets on unintended selections, or
						bets made under any misunderstanding of the terms or
						conditions.
					</li>
					<li>
						<strong>Disputed Outcomes</strong>:
						<br /> In the event of a dispute regarding a bet's
						outcome, <HomeLink /> will conduct a thorough
						review in accordance with our betting rules and
						regulations. The decision made by our review team will
						be final. Only in cases where a technical error directly
						attributable to <HomeLink /> is identified, and
						where such error has unfairly resulted in a loss of
						funds, may a refund be considered.
					</li>
					<li>
						<strong>Account Balances</strong>:
						<br /> Funds deposited into a <HomeLink />
						account are for betting purposes only. Withdrawals of
						deposited but un-wagered funds may be subject to
						processing and transaction fees. Users are advised to
						deposit funds thoughtfully, in accordance with their
						betting intentions.
					</li>
					<li>
						<strong>Responsible Gambling</strong>:
						<br /> <HomeLink /> supports responsible
						gambling. If a user feels they have made a bet under
						distress or would like to discuss their betting
						behavior, we encourage them to contact our support team
						for guidance and support. However, this does not imply
						eligibility for a refund of placed bets.
					</li>
					<li>
						<strong>Changes to Terms</strong>:
						<br /> <HomeLink /> reserves the right to modify
						this No Refund Policy at any time. Any changes will be
						effective immediately upon posting on our website.
						Continued use of the platform after such changes
						constitutes acceptance of the new policy.
					</li>
				</List>
					<Title>User Acknowledgment</Title>
					<p>
						By placing bets on <HomeLink />, users
						acknowledge they have read, understood, and agreed to
						the terms outlined in this No Refund Policy. Users also
						acknowledge that they are placing bets at their own
						risk, with the understanding that no refunds will be
						provided under any circumstances, barring those
						explicitly mentioned herein. For any questions or
						clarifications regarding this policy, please contact our
						customer support team. <HomeLink /> is committed
						to ensuring a fair and safe betting environment for all
						users. We appreciate your understanding and adherence to
						our No Refund Policy.
					</p>
			</div>
		</div>
	);
};

export default NoRefundPolicy;

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

const Title = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="my-[20px] text-xl font-bold ">{children}</h2>;
};

const List = ({ children }: { children: React.ReactNode }) => {
	return (
		<ul className="list-decimal pl-6 flex flex-col gap-2">{children}</ul>
	);
};
