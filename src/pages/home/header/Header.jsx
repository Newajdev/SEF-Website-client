import React from 'react';
import PrimeBtn from '../../../component/PrimeBtn';
import img from '../../../assets/charimentham2.jpg'
import { FaPlay } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='section p-20 '>

            <div className='flex flex-row-reverse justify-center items-center'>
                {/* Ligt Side: Text Content */}
                <div className='w-2/5'>
                    <h2 className="text-6xl font-extrabold uppercase text-[#001C08] mb-10">Empower your Skill to Shape your future</h2>
                    <p className='text-xl font-semibold text-[#001C08]'>Transform the country’s manpower into a Skilled workforce. Join any of your professional course and become a self-reliant and successfull person.</p>
                    <p className='text-xl font-bold mt-3 text-[#001C08]'>Join Today and Track your Changes</p>

                    <div className='flex gap-6 mt-16'>
                        <PrimeBtn btnTitle={'Contact us'}></PrimeBtn>
                        <PrimeBtn btnTitle={'Join a Seminar'}></PrimeBtn>
                    </div>
                </div>

                {/* Right Side:  video content */}
                <div className='w-3/5 p-16'>
                    <div className='w-full h-[550px] bg-no-repeat rounded-4xl bg-white p-2 relative '>
                        <div className='w-full h-full'>
                            <img className='w-full h-full rounded-4xl' src={img} alt="" />
                            <div className='playBTN absolute top-50 right-100 translate-y-[50%] bg-amber-600 transform-50 w-20 h-20 rounded-full border-8 border-amber-200 '><FaPlay className='text-white text-2xl absolute top-5 left-5'></FaPlay></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;