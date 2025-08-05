import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Logo-Icon.png'


const Footer = () => {
    return (
        <>
            <div className='footer Bg-BaseClr py-20'>
                <div className='mx-auto flex flex-col justify-center items-center '>
                    <img className='' src={logo} alt="" />
                    <h3 className='text-4xl text-white font-bold uppercase my-4'>Admission Going On</h3>
                    <p className='text-white w-2/4 text-center text-lg'><span className='text-orange-300'>Don’t wait for the future to find you — create it yourself. </span><br /><span>Join Shah Emdadia Freelancers today and start your journey toward becoming a skilled, confident, and future-ready professional. Whether you're just starting out or looking to level up, we’re here to guide you every step of the way.</span></p>
                    <div className='text-white text-2xl font-bold mt-10 text-center'>
                        <p className='uppercase'>Follow us :</p>
                        <div className='flex text-white gap-6 mt-4 text-3xl'>
                            <FaFacebook />
                            <FaYoutube />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

            </div>
            <p className='text-center'>Copyright © 2025 Shah Emdadia Freelancers</p>
        </>
    );
};

export default Footer;