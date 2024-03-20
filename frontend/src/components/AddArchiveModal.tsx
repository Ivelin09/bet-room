import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Select,
    SelectItem,
} from '@nextui-org/react';
import { useState } from 'react';
import { addArchive } from '../api/requests';

export const AddArchiveModal = ({ setArchives }: { setArchives: any }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [date, setDate] = useState('');
    const [match, setMatch] = useState('');
    const [tip, setTip] = useState('');
    const [odd, setOdd] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async () => {
        try {
            const arch = await addArchive(
                date,
                match,
                tip,
                Number.parseInt(odd),
                value
            );
            setArchives((prev: any) => [arch, ...prev]);
        } catch (err: any) {
            console.log(err.message);
        }
        console.log('ran');
    };

    return (
        <>
            <Button onPress={onOpen} color='primary' className='ml-[70%] mt-2'>
                Add new archive
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>
                                Add Archive
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type='date'
                                    label='Date'
                                    placeholder='Enter the date of the tip'
                                    value={date}
                                    onValueChange={setDate}
                                />
                                <Input
                                    type='text'
                                    label='Match'
                                    placeholder='Enter the match of the tip'
                                    value={match}
                                    onValueChange={setMatch}
                                />
                                <Input
                                    type='text'
                                    label='Tip'
                                    placeholder='Enter the tip'
                                    value={tip}
                                    onValueChange={setTip}
                                />
                                <Input
                                    type='number'
                                    label='Odd'
                                    placeholder='Enter the odd of the tip'
                                    value={odd}
                                    onValueChange={setOdd}
                                />
                                <Select
                                    isRequired
                                    label='Result'
                                    placeholder='Enter the result of the tip'
                                    defaultSelectedKeys={['win']}
                                    selectedKeys={[value]}
                                    onChange={(e) => setValue(e.target.value)}
                                >
                                    <SelectItem key={'win'} value={'win'}>
                                        win
                                    </SelectItem>
                                    <SelectItem key={'lose'} value={'lose'}>
                                        lose
                                    </SelectItem>
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color='danger'
                                    variant='light'
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color='primary'
                                    onPress={() => {
                                        onClose();
                                        handleSubmit();
                                    }}
                                >
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
