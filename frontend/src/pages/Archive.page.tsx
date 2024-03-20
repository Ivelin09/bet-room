import { useState } from 'react';
import { Archive } from '../components/Archive';

export const ArchivePage = () => {
    const [archives, setArchives] = useState([] as any);
    return (
        <div>
            <Archive archives={archives} setArchives={setArchives} />
        </div>
    );
};
