import Image from 'next/image';
import React from 'react';
import PriemaryBtn from '../PriemaryBtn';
import OutlineBtn from '../OutlineBtn';

const Bootcamps = () => {
    return (
        <div className='py-24'>
            <h2 className='font-bold text-3xl mb-5'>Join on our Free Bootcamp</h2>

            <div className='grid grid-cols-2 gap-10'>
            <div className='bg-white p-4 rounded-2xl shadow-xl'>
                <div className="card bg-base-100 ">
                    <figure>
                        <Image className="w-full rounded-xl h-96 bg-green-300" src='https://picsum.photos/200/300' width={500} height={500} alt='T-shirt Design A to Z' />
                    </figure>
                    <div className="card-body pl-0">
                        <h2 className="card-title">T-shirt Design A to Z</h2>
                        <p>Duration: 1 hour</p>
                        <div className="card-actions justify-start mt-4">
                            <PriemaryBtn title={'Join now'} />
                            <OutlineBtn title={'Details'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white p-4 rounded-2xl shadow-xl'>
                <div className="card bg-base-100 ">
                    <figure>
                        <Image className="w-full rounded-xl h-96 bg-green-300" src='https://picsum.photos/200/300' width={500} height={500} alt='T-shirt Design A to Z' />
                    </figure>
                    <div className="card-body pl-0">
                        <h2 className="card-title">T-shirt Design A to Z</h2>
                        <p>Duration: 1 hour</p>
                        <div className="card-actions justify-start mt-4">
                            <PriemaryBtn title={'Join now'} />
                            <OutlineBtn title={'Details'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
        
    );
};

export default Bootcamps;