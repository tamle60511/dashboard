import { useState } from 'react';

import { compatibility } from '@/backend/mocks/compatibility';
import Image from '../Image';
import Tooltip from '../Tooltip';

type CompatibilityProps = {
    classItemName?: string;
};

const Compatibility = ({ classItemName }: CompatibilityProps) => {
    const [activeIds, setActiveIds] = useState<number[]>([]);

    const handleClick = (id: number) => {
        setActiveIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    return (
        <div>
            <div className="mb-4 flex items-center">
                <div className="text-button">Compatibility</div>
                <Tooltip className="ml-1.5" content="Maximum 100 characters. No HTML or emoji allowed" />
            </div>
            <div className="-mx-1.5 -mt-3 flex flex-wrap">
                {compatibility.map((item) => (
                    <div
                        className={`border-s-stroke2 text-button hover:border-s-highlight mx-1.5 mt-3 flex h-12 cursor-pointer items-center gap-2 rounded-full border px-2.5 transition-colors ${
                            activeIds.includes(item.id) ? '!border-s-focus' : ''
                        } ${classItemName || ''}`}
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                    >
                        <div className="dark:bg-shade-05 rounded">
                            <Image className="size-6 opacity-100" src={item.image} width={24} height={24} alt={item.title} />
                        </div>
                        <div className="truncate">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Compatibility;
