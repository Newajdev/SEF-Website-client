import React from 'react';
import PriemaryBtn from '../PriemaryBtn';
import OutlineBtn from '../OutlineBtn';
import Image from 'next/image';

const UpCommingSeminer = () => {
    return (
        <div className='bg-white p-10 rounded-2xl space-y-6 shadow-lg'>
            <h2 className='text-2xl font-bold '>Up Coming Seminars</h2>
            <div className='grid grid-cols-2 gap-x-6'>
                <div className="card card-side border border-gray-200 shadow-sm">
                    <figure className='w-[40%]'>
                        <Image src='https://picsum.photos/200/300' width={50} height={50} alt='Freelancing e Success full Career' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Freelancing e Success full Career</h2>
                        <p>Speaker: Rabil Hasan Ruppom</p>
                        <p>Date: 11 October 2025 || 8:00 pm</p>
                        <p>Duration: 1 hours</p>
                        <p>Set: 20 person</p>
                        <div className="card-actions justify-end mt-3">
                            <OutlineBtn title={'Details'}/>
                            <PriemaryBtn title={'Book now'}/>
                        </div>
                    </div>
                </div>
                <div className="card card-side border border-gray-200 shadow-sm">
                    <figure className='w-[40%]'>
                        <Image  src='https://picsum.photos/200/300' width={50} height={50} alt='Freelancing e Success full Career' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Freelancing e Success full Career</h2>
                        <p>Speaker: Rabil Hasan Ruppom</p>
                        <p>Date: 11 October 2025 || 8:00 pm</p>
                        <p>Duration: 1 hours</p>
                        <p>Set: 20 person</p>
                        <div className="card-actions justify-end mt-3">
                            <OutlineBtn title={'Details'}/>
                            <PriemaryBtn title={'Book now'}/>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </div>
    );
};

export default UpCommingSeminer;