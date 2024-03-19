import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from '@nextui-org/react';
import { useCallback, useEffect, useState } from 'react';
import { getAllArchives } from '../api/requests';

export const Archive = () => {
    const hardCoded = [
        {
            date: '2021-10-10',
            match: 'Real Madrid vs Barcelona',
            tip: 'over 2 goals',
            odd: 1.5,
            result: true,
        },
        {
            date: '2021-10-11',
            match: 'Liverpool vs Manchester United',
            tip: 'draw',
            odd: 2.0,
            result: false,
        },
    ];

    const [archives, setArchives] = useState([]); // Adjusted for typing below

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

    // Assuming Archive type is defined outside the component, if not, define it inside
    interface Archive {
        date: string;
        match: string;
        tip: string;
        odd: number;
        result: boolean;
    }

    return (
        <div>
            <h1 className=' justify-center'>Archive</h1>

            <Table aria-label='Archive table'>
                <TableHeader>
                    <TableColumn>DATE</TableColumn>
                    <TableColumn>MATCH</TableColumn>
                    <TableColumn>TIP</TableColumn>
                    <TableColumn>ODD</TableColumn>
                    <TableColumn>RESULT</TableColumn>
                </TableHeader>
                <TableBody>
                    {hardCoded.map((archive: Archive) => (
                        <TableRow key={archive.date}>
                            <TableCell>{archive.date}</TableCell>
                            <TableCell>{archive.match}</TableCell>
                            <TableCell>{archive.tip}</TableCell>
                            <TableCell>{archive.odd}</TableCell>
                            <TableCell>
                                {archive.result ? 'Won' : 'Lost'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
