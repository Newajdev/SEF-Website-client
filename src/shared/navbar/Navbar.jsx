import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo-Icon.png'


const Navbar = () => {

    const leftNavList = <>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/'}>home</NavLink></li>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/courses'}>Courses</NavLink></li>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/bootcamp'}>bootcamp</NavLink></li>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/seminar'}>Seminar</NavLink></li> 
    </>
    const RightNavList = <>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/about'}>about</NavLink></li>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/contact'}>contact</NavLink></li>
        <li className='hover:text-[#F2762F] border-b-3 border-b-transparent duration-200'><NavLink to={'/success'}>success story</NavLink></li>
    </>

    return (

        <div className="navbar Bg-BaseClr shadow-sm lg:px-10">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow uppercase text-xl tracking-wide font-bold ">
                        {leftNavList} {RightNavList}

                    </ul>
                </div>
            </div>
            <div className="navbar-start hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-white uppercase text-xl tracking-wide font-bold ">
                    {leftNavList}
                </ul>
            </div>
            <div className="flex lg:justify-center  justify-end w-[60%] ">
                <img className='w-2/4 lg:w-2/7' src={logo} alt="" />
            </div>
            <div className="lg:navbar-end hidden ">
                <ul className="menu menu-horizontal px-1 text-white uppercase text-xl tracking-wide font-bold ">
                    {RightNavList}
                </ul>
                
            </div>
        </div>

    );
};

export default Navbar;