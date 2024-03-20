import { Accordion, AccordionItem } from '@nextui-org/react';

const AccordionComponent = () => {
	return (
		<>
			<div className="sm:w-[1170px] md:w-[80%] w-[90%] my-[50px] mx-auto py-[60px] ">
				<h1 className="sm:text-4xl text-2xl font-bold mb-[20px] ">
					Why Choose Bet-Room.com?
				</h1>
				<Accordion variant="bordered">
					<AccordionItem title="Guaranteed Long-Term Profitability">
						We don't believe in quick fixes or temporary gains. Our
						focus is on providing you with betting combos that
						ensure consistent profits over time. With Bet-Room.com,
						you're not just placing bets; you're investing in your
						financial future.
					</AccordionItem>
					<AccordionItem title="Expertly Curated Combos">
						Our team of experienced sports analysts and betting
						professionals meticulously curates each combo offered on
						our platform. Through extensive research and analysis,
						we identify the most promising opportunities with the
						highest potential for profitability.
					</AccordionItem>
					<AccordionItem title="Variety of Options">
						Whether you're a seasoned bettor or just starting out,
						we have something for everyone at Bet-Room.com. Choose
						from our selection of 10 odd, 20 odd, and 50 odd combos,
						each tailored to suit different risk appetites and
						betting preferences.
					</AccordionItem>
					<AccordionItem title="Transparent Performance Tracking">
						We believe in full transparency when it comes to our
						performance. That's why we provide comprehensive
						tracking and reporting tools, allowing you to monitor
						the success of our combos and track your earnings with
						ease.
					</AccordionItem>
					<AccordionItem title="Dedicated Customer Support">
						Have questions or need assistance? Our dedicated
						customer support team is here to help. Whether you need
						betting advice, technical assistance, or have inquiries
						about our services, we're just a message away.
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
};

export default AccordionComponent;
