import { useState } from 'react';
import logo from '../../assets/Logo-Icon.png'
import { GoHomeFill } from 'react-icons/go';
import { MdPlaylistAddCheckCircle } from 'react-icons/md';
import { FaHospitalUser, } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';

const Navbar = () => {

    const [visible, setVisible] = useState(true)

    return (

        <div className="h-18 lg:h-24 text-white rounded-b-2xl lg:rounded-b-[60px] bg-[#00280B] relative">
            <h3 className="text-2xl lg:text-5xl text-white text-center font-bold pt-2">Shah Emdadia Freelancers'</h3>
            <div className='flex justify-center'>
                <div className='border inline-flex justify-center'>
                    <div onMouseOverCapture={() => setVisible(false)} onMouseOutCapture={() => setVisible(true)} className='relative'>
                        {
                            visible ? <div className='absolute left-[50%] -translate-x-[50%] z-5 p-2 bg-[#00280B] rounded-full border-4 border-white inline-flex h-20 w-20 mt-4 duration-500'><img src={logo} alt="" /></div>
                                :
                                <ul className='nav duration-1000 flex gap-6 mt-4 absolute left-[50%] -translate-x-[50%]'>

                                    <li onClick={() => alert('Home')} className='lg:nav-li text-center lg:text-3xl flex flex-col justify-center items-center h-20 w-20 bg-[#00280B] rounded-full border-4 border-white hover:bg-[#2f573a] p-2'>
                                        <GoHomeFill/>
                                        <p className='text-sm -mt-1 uppercase disabled'>home</p>
                                    </li>
                                    <li onClick={() => alert('About us')} className='lg:nav-li text-center lg:text-4xl flex flex-col justify-center items-center h-20 w-20 bg-[#00280B] rounded-full border-4 border-white hover:bg-[#2f573a] p-2'>
                                        <FaHospitalUser />
                                        <p className='text-sm -mt-1 uppercase disabled'>about</p>
                                    </li>
                                    <li onClick={() => alert('Our Curse')} className='lg:nav-li text-center lg:text-4xl flex flex-col justify-center items-center h-20 w-20 bg-[#00280B] rounded-full border-4 border-white hover:bg-[#2f573a] p-2'>
                                        <MdPlaylistAddCheckCircle />
                                        <p className='text-sm -mt-1 uppercase disabled'>course</p>
                                    </li>
                                    <li onClick={() => alert('Contact us')} className='lg:nav-li text-center lg:text-3xl flex flex-col justify-center items-center h-20 w-20 bg-[#00280B] rounded-full border-4 border-white hover:bg-[#2f573a] p-2'>
                                        <FaPhoneVolume />
                                        <p className='text-sm uppercase disabled'>contact</p>
                                    </li>
                                    

                                </ul>

                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;