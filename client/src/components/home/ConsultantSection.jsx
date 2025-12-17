import React from 'react';

const ConsultantSection = () => {
    return (
        <div className='Bg-primary text-white flex justify-between px-20 py-6 rounded-3xl items-center'>
            <h2 className='text-5xl w-[60%] font-bold'>
                Get A free Consultation before admission
            </h2>
            <div className=''>
                <button className='bg-[#F2762F] px-5 py-2 rounded-full text-3xl font-bold text-white border-2 border-transparent hover:bg-transparent hover:text-[#F2762F] hover:border-[#F2762F] duration-200'>Book Now</button>
            </div>
        </div>
    );
};

export default ConsultantSection;