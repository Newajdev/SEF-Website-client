'use client'
import React, { useState } from 'react';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [acticelink, setActiveLink]= useState('/')
    const Navigate = usePathname(null)
    
    

    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Courses',
            path: '/courses'
        },
        {
            title: 'Bootcamps',
            path: '/bootcamps'
        },
        {
            title: 'Seminars',
            path: '/seminars'
        },
    ]
    const hendleNavigate = ()=>{
        setActiveLink(Navigate)
    }    
    return (
        <div className='Bg-primary text-white py-6 sticky top-0 w-full z-10'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <Image src='/asset/SEF_Logo-01.svg' width={160} height={50} alt="Shah Emdadia Freelancers' logo" loading="lazy"  />
                        </div>

                    <div className=''>
                        <ul className='flex gap-x-6 text-lg font-semibold'>
                            {
                                navLinks?.map((link)=>
                                <li
                                className={`${acticelink == link.path && 'text-[#F2762F]'}`}
                                onClick={hendleNavigate}
                                key={link.path}
                                >
                                    <Link href={link.path}>{link.title}</Link>
                                </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className=''>
                        <button className='Bg-secondery px-5 py-2 rounded-full text-lg font-semibold'>Enroll Now</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;