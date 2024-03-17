import {
	Card,
	CardBody,
	CardFooter,
	Link,
	Button,
	Divider,
} from '@nextui-org/react';

const Home = () => {
	return (
		<div
			className="sm:h-[90vh] h-full flex flex-col justify-center items-center bg-auto bg-no-repeat bg-fixed"
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('http://192.168.0.101:5000/src/assets/football.jpg')`,
			}}
		>
			{/* background-image: url('http://192.168.0.101:5000/src/assets/football.jpg'), */}
			<div className="flex flex-col sm:flex-row gap-4 w-full p-4 justify-center  ">
				<Card className="sm:w-2/6 w-full py-2">
					<CardBody className="flex flex-col gap-4">
						<div className="flex flex-col justify-center items-center">
							<p className="text-lg uppercase">10 odds</p>
							<p className="text-lg uppercase">combo</p>
						</div>
						<div className="flex flex-col justify-center items-center text-md">
							<p>3 - 4 matches combo</p>
							<p>based on 1x2 0/4</p>
							<p>AH, BTTS and etc.</p>
							<p>Suitable for Beginners</p>
							<p>24/7 service</p>
							<p>Genuine Activities</p>
							<Link className="font-bold text-red-600 uppercase text-lg cursor-pointer">
								no refund!
							</Link>
						</div>
						{/* <p className="font-bold text-red-600 uppercase text-lg">no refund!</p> */}
					</CardBody>
					<CardFooter>
						<div className="flex flex-col gap-3 justify-center items-center w-full">
							<Button
								color="primary"
								variant="shadow"
								radius="lg"
								className="uppercase"
							>
								buy now 99€
							</Button>
							<Button
								color="primary"
								variant="shadow"
								radius="lg"
								className="uppercase"
							>
								archives
							</Button>
						</div>
					</CardFooter>
				</Card>
				<Card className="sm:w-2/6 w-full py-2">
					<CardBody className="flex flex-col gap-4">
						<div className="flex flex-col justify-center items-center">
							<p className="text-lg uppercase">20 odds</p>
							<p className="text-lg uppercase">combo</p>
						</div>
						<div className="flex flex-col justify-center items-center text-md">
							<p>4 - 5 matches combo</p>
							<p>based on 1x2 0/4</p>
							<p>AH, BTTS and etc.</p>
							<p>Suitable for something</p>
							<p>lorem3</p>
							<p>24/7 service</p>
							<p>Genuine Activities</p>
							<Link className="font-bold text-red-600 uppercase text-lg cursor-pointer">
								no refund!
							</Link>
						</div>
					</CardBody>
					<CardFooter>
						<div className="flex flex-col gap-3 justify-center items-center w-full">
							<Button
								color="primary"
								variant="shadow"
								radius="lg"
								className="uppercase"
							>
								buy now 149€
							</Button>
							<Button
								color="primary"
								variant="shadow"
								radius="lg"
								className="uppercase"
							>
								archives
							</Button>
						</div>
					</CardFooter>
				</Card>
				<Card className="sm:w-2/6 w-full py-2">
					<CardBody className="flex flex-col gap-4">
						<div className="flex flex-col justify-center items-center">
							<p className="text-lg uppercase">50 odds</p>
							<p className="text-lg uppercase">combo</p>
						</div>
						<div className="flex flex-col justify-center text-md items-center ">
							<p>5 - 6 matches combo</p>
							<p>based on 1x2 0/4</p>
							<p>AH, BTTS and etc.</p>
							<p>Suitable for Professionals</p>
							<p>bitches?</p>
							<p>24/7 service</p>
							<p>Genuine Activities</p>
							<Link className="font-bold text-red-600 uppercase text-lg cursor-pointer">
								no refund!
							</Link>
						</div>
						{/* <p className="font-bold text-red-600 uppercase text-lg">no refund!</p> */}
					</CardBody>
					<CardFooter>
						<div className="flex flex-col gap-3 justify-center items-center w-full">
							<Button
								color="primary"
								variant="shadow"
								radius="lg"
								className="uppercase"
							>
								buy now 288€
							</Button>
							<Button
								color="primary"
								variant="shadow"
								radius="lg"
								className="uppercase"
							>
								archives
							</Button>
						</div>
					</CardFooter>
				</Card>
			</div>
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
		</div>
	);
};

export default Home;
