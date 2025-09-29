import Image from 'next/image';
import React from 'react';

const ChatBot = () => {
    return (
        <div className='relative'>
            <div className='absolute -top-5 -left-10 translate-x-5'>
                <Image className='w-26 h-26 animate-Rotate ' src={'/asset/contactwithus.png'} width={10200} height={10200} alt='Logo'/>
            </div>
            <div className='Bg-primary p-2 rounded-full'>
                <Image className='w-12 h-12' src={'/asset/Logo-icon.png'} width={50} height={50} alt='Logo'/>
            </div>
        </div>
    );
};

export default ChatBot;