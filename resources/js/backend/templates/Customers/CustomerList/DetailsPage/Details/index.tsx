import Button from '@/backend/components/Button';
import Editor from '@/backend/components/Editor';
import Image from '@/backend/components/Image';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';
import Contacts from './Contacts';
import PurchaseHistory from './PurchaseHistory';

type DetailsProps = {
    onBack?: () => void;
};

const Details: React.FC<DetailsProps> = ({ onBack }) => {
    const [content, setContent] = useState('');

    const handleBack = () => {
        if (onBack) {
            onBack();
            return;
        }

        try {
            router.back();
        } catch (error) {
            console.error('Không thể quay lại trang trước:', error);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-3">
                <Button className="mr-auto max-md:hidden" isStroke onClick={handleBack}>
                    Back
                </Button>
                <Button
                    className="mr-auto !hidden rotate-180 max-md:!flex"
                    icon="arrow"
                    isStroke
                    isCircle
                    onClick={handleBack} // Thống nhất logic quay lại
                />
                <Button isStroke>Follow</Button>
                <Button as="link" href="/messages" isBlack>
                    Message
                </Button>
            </div>
            <div className="flex items-center">
                <div className="shrink-0">
                    <Image
                        className="size-20 rounded-full object-cover opacity-100"
                        src="/images/avatars/2.png"
                        width={80}
                        height={80}
                        alt="Avatar"
                    />
                </div>
                <div className="grow pl-6.5 max-lg:pl-5">
                    <div className="text-h4 max-lg:text-h5">Jack Flynn</div>
                    <div className="text-t-secondary/80 max-lg:text-body-2 text-[1.125rem] leading-[2rem] font-semibold">@celestialwanderer</div>
                </div>
            </div>
            <Editor label="Private notes" tooltip="Maximum 100 characters. No HTML or emoji allowed" content={content} onChange={setContent} />
            <Contacts />
            <PurchaseHistory />
        </div>
    );
};

export default Details;
