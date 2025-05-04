import { useState } from 'react';
import { messages } from '@/backend/mocks/messages';
import Button from '../../Button';
import Icon from '../../Icon';
import Image from '../../Image';
import Modal from '../../Modal';

const Messages = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button isWhite isCircle onClick={() => setIsOpen(true)}>
                <Icon name="chat-think" />
            </Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} isSlidePanel>
                <div className="text-h5 flex h-20 items-center pt-5 pr-20 pb-3 pl-10 max-md:h-18 max-md:pt-3 max-md:pl-9">Messages</div>
                <div className="flex h-[calc(100svh-5rem)] flex-col gap-1 overflow-y-auto px-5 pb-5 max-md:h-[calc(100svh-4.5rem)] max-md:px-6">
                    {messages.map((message) => (
                        <div className="group relative flex items-center px-5 py-3 max-md:px-3" key={message.id}>
                            <div className="gradient-card invisible absolute inset-0 rounded-[16px] opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                                <div className="bg-b-highlight absolute inset-[1.5px] rounded-[14.5px]"></div>
                            </div>
                            <div className="relative z-2 h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                <Image className="size-12 opacity-100" src={message.avatar} width={48} height={48} alt="" />
                            </div>
                            <div className="relative z-2 w-[calc(100%-3rem)] pl-5 max-md:pl-4">
                                <div className="flex items-center">
                                    <div className="text-sub-title-1">@{message.login}</div>
                                    <div className="text-caption text-t-tertiary ml-auto">{message.time}</div>
                                    <div className={`ml-3 h-3 w-3 rounded-full ${message.new ? 'bg-primary-02' : 'bg-t-tertiary/50'}`}></div>
                                </div>
                                <div className="text-body-2 text-t-secondary mt-1 truncate">{message.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="!absolute bottom-5 left-1/2 z-3 -translate-x-1/2" isBlack as="link" href="/messages">
                    View all messages
                </Button>
            </Modal>
        </>
    );
};

export default Messages;
