import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@nextui-org/react';
import { useEffect, useRef } from 'react';

const Paypal = ({
	isOpen,
	onOpenChange,
	checkout,
	setCheckout,
	cartItem,
}: {
	isOpen: boolean;
	onOpenChange: any;
	checkout: boolean;
	setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
	cartItem: {
		title: string;
		price: number;
	};
}) => {
	const paypal = useRef();

	useEffect(() => {
		if (checkout) {
			window.paypal
				.Buttons({
					createOrder: (data, actions, err) => {
						return actions.order.create({
							intent: 'CAPTURE',
							purchase_units: [
								{
									description: 'Cool looking table',
									amount: {
										currency_code: 'EUR',
										value: cartItem.price,
									},
								},
							],
						});
					},
					onApprove: async (data, actions) => {
						const order = await actions.order.capture();
						console.log(order);
					},
					onError: (err) => {
						console.log(err);
					},
				})
				.render(paypal.current);
		}
	}, [checkout === true]);

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			isDismissable={false}
			className="max-h-[80%] overflow-y-auto"
			classNames={{
				closeButton: 'hidden',
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-row gap-1 uppercase">
							<b>{cartItem.title} oods</b> combo -{' '}
							<p>
								<span className="font-bold">
									{cartItem.price}
								</span>
								€
							</p>
						</ModalHeader>
						<ModalBody>
							<div ref={paypal}></div>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onPress={() => {
									onClose();
									setCheckout(false);
								}}
							>
								Close
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default Paypal;
