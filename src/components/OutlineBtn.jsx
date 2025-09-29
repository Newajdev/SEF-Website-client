import React from 'react';

const OutlineBtn = ({ title }) => {
    return (
        <button className='hover:bg-[#F2762F] px-5 py-2 rounded-full text-lg font-semibold hover:text-white border-2 hover:border-transparent bg-transparent text-[#F2762F] border-[#F2762F] duration-200'>{title}</button>
    );
};

export default OutlineBtn;