import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from '@nextui-org/react';
import { useCallback, useEffect } from 'react';
import { getAllArchives } from '../api/requests';

interface IArchive {
    date: string;
    match: string;
    tip: string;
    odd: number;
    result: boolean;
    _id: string;
}
export const Archive = ({
    archives,
    setArchives,
}: {
    archives: IArchive[];
    setArchives: any;
}) => {
    const hardCoded = [
        {
            date: '2021-10-10',
            match: 'Real Madrid vs Barcelona',
            tip: 'over 2 goals',
            odd: 1.5,
            result: 'lost',
            _id: '1232',
        },
        {
            date: '2021-10-11',
            match: 'Liverpool vs Manchester United',
            tip: 'draw',
            odd: 2.0,
            result: 'won',
            _id: '123',
        },
    ];
    const columns = [
        { key: 'date', label: 'DATE' },
        { key: 'match', label: 'MATCH' },
        { key: 'tip', label: 'TIP' },
        { key: 'odd', label: 'ODD' },
        { key: 'result', label: 'RESULT' },
    ];

    // const [archives, setArchives] = useState([]);

    const fetchArchives = useCallback(async () => {
        try {
            const res = await getAllArchives(); // Assuming this function is correctly fetching the archives
            setArchives(res);
        } catch (err: any) {
            console.log(err.message);
        }
    }, []);

    useEffect(() => {
        fetchArchives();
    }, [fetchArchives]);


    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-center'>Archive</h1>

            <Table aria-label='Archive table'>
                <TableHeader>
                    {columns.map((column) => (
                        <TableColumn key={column.key}>
                            {column.label}
                        </TableColumn>
                    ))}
                </TableHeader>
                <TableBody items={archives}>
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => (
                                <TableCell>
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
