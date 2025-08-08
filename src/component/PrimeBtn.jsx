

const PrimeBtn = ({btnTitle}) => {
    return (
        <button className="bg-[#F2762F] px-8 py-3 text-xl font-semibold rounded-full text-[#001C08] border-2 border-transparent hover:border-2 hover:border-[#F2762F] hover:bg-transparent hover:text-[#F2762F] duration-500">
            {btnTitle}
        </button>
    );
};

export default PrimeBtn;