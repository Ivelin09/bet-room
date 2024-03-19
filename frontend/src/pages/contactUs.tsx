import { ContactForm } from '../components/ContactForm';

const ContactUs = () => {
	return (
		<div className="sm:w-[1170px] md:w-[80%] w-[90%] mx-auto py-[60px] ">
			<div className="flex justify-center items-center w-full mb-[55px] ">
				<h1 className="leading-10 sm:text-3xl text-xl font-bold">
					Contact Us
				</h1>
			</div>
			<div className="flex sm:flex-row flex-col gap-4 justify-center w-full">
				<div className="flex flex-col gap-[15px] sm:w-[45%] w-full ">
					<h2 className="my-[20px] text-xl font-bold">BetRoom.com</h2>
					<p>
						At our site we pride ourselves on providing the best
						betting experience possible. With our expert team and
						exciting betting options, you can rest assured that
						you're getting the best service available.
					</p>
					<p>
						For any questions regarding our services, available
						packages of membership or help for betting, you are
						welcome to contact our team.
					</p>
					<p>We will get back to you as soon as possible!</p>
				</div>
				<div className="sm:w-[45%] w-full ">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
