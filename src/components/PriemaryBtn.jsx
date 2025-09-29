import React from 'react';

const PriemaryBtn = ({title}) => {
    return (
        <button className='bg-[#F2762F] px-5 py-2 rounded-full text-lg font-semibold text-white border-2 border-transparent hover:bg-transparent hover:text-[#F2762F] hover:border-[#F2762F] duration-200'>{title}</button>
    );
};

export default PriemaryBtn;