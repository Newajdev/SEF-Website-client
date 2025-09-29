import Image from 'next/image';
import React from 'react';
import PriemaryBtn from '../PriemaryBtn';
import OutlineBtn from '../OutlineBtn';

const OurCourses = () => {
    const Courses = [
        {
            id: 1,
            category: 'Graphics Design',
            Name: 'Graphics Design',
            Duration: '6 month || 360 hours',
            TumbnillUrl: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            category: 'Programming and Tech',
            Name: 'Mern Stack Web Development',
            Duration: '6 month || 360 hours',
            TumbnillUrl: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            category: 'Digital Marketing',
            Name: 'Digital Marketing',
            Duration: '6 month || 360 hours',
            TumbnillUrl: 'https://picsum.photos/200/300',
        }
    ]

    const Category = Array.from(new Set(Courses.map(item => item.category)))



    return (
        <div className='py-20'>
            <div className='text-center w-[80%] mx-auto mb-20 text-[#00280B]'>
                <h3 className='text-5xl font-bold mb-4'>Our Course</h3>
                <p className='text-2xl'>All courses offered by Shah Emdadia Freelancers are among the most popular and in-demand in today's global job market.  These carefully curated programs are designed to equip you with the skills and knowledge needed to succeed in your chosen profession.</p>
            </div>

            <div className='grid grid-cols-3 justify-between gap-6 py-6'>
                {
                    Courses?.map((course) =>

                        <div key={course.id} className='bg-white p-4 rounded-2xl shadow-xl'>
                            <div className="card bg-base-100 ">
                                <figure>
                                    <Image className="w-full rounded-xl h-56" src={course.TumbnillUrl} width={500} height={500} alt={course.Name} />
                                </figure>
                                <div className="card-body pl-0">
                                    <h2 className="card-title">{course.Name}</h2>
                                    <p>Duration: {course.Duration}</p>
                                    <div className="card-actions justify-start mt-4">
                                        <PriemaryBtn title={'Buy Now'} />
                                        <OutlineBtn title={'Details'} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default OurCourses;