import Image from 'next/image';
import React from 'react';

const WhyChoiceUs = () => {
    return (
        <div className='py-20'>
            <div className='text-center w-[80%] mx-auto mb-20 text-[#00280B]'>
                <h3 className='text-5xl font-bold mb-4'>Why Choice Us</h3>
                <p className='text-2xl'>Our goal is to help you grow into a skilled, confident, and future-ready professional by providing you with high-quality training, real-world knowledge, and continuous support.At Shah Emdadia Freelancers, we believe that with the right guidance and resources, anyone can achieve their goals and build a successful career in the modern digital world.</p>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                <div className='p-6 bg-[#edf8f0] rounded-2xl shadow-sm text-[#00280B]'>
                    <Image className="h-32 w-32" src='/asset/247support.png' width={500} height={500} alt='24/7 Online Support' />
                    <h1 className='text-xl font-bold mb-3'>24/7 Online Support</h1>
                    <p>Shah Emdadia Freelancers ensures round-the-clock support for its students. Anytime, anywhere – we are always by your side. Not only during the course, but even throughout your career journey, our expert team is ready to guide you so your learning never stops.</p>
                </div>
                <div className='p-6 bg-[#f8e6db] rounded-2xl shadow-sm text-[#00280B]'>
                    <Image className="h-32 w-32" src='/asset/lifetimesupport.png' width={500} height={500} alt='Lifetime Support' />
                    <h1 className='text-xl font-bold mb-3'>Lifetime Support</h1>
                    <p>At Shah Emdadia Freelancers, our commitment doesn’t end when your course does. We provide lifetime support to ensure you can overcome any challenges in your freelancing journey. Our expert guidance and mentorship will always be by your side, helping you grow and succeed every step of the way.</p>
                </div>
                <div className='p-6 bg-[#edf8f0] rounded-2xl shadow-sm text-[#00280B]'>
                    <Image className="h-32 w-32" src='/asset/specialclass.png' width={500} height={500} alt='Freelancing Special Class' />
                    <h1 className='text-xl font-bold mb-3'>Freelancing Special Class</h1>
                    <p>Shah Emdadia Freelancers offers exclusive special classes designed to give you advanced strategies, insider tips, and practical skills that boost your freelancing career. These sessions focus on real-world projects and industry trends, ensuring you stay ahead in the competitive freelance marketplace.</p>
                </div>
                <div className='p-6 bg-[#f8e6db] rounded-2xl shadow-sm text-[#00280B]'>
                    <Image className="h-32 w-32" src='/asset/labsupport.png' width={500} height={500} alt='Practice Lab Support' />
                    <h1 className='text-xl font-bold mb-3'>Practice Lab Support</h1>
                    <p>Shah Emdadia Freelancers provides dedicated practice lab support where students can apply their knowledge in a real working environment. Our lab facilities help you gain hands-on experience, improve technical skills, and build confidence to succeed in the freelancing marketplace.</p>
                </div>
                <div className='p-6 bg-[#edf8f0] rounded-2xl shadow-sm text-[#00280B]'>
                    <Image className="h-32 w-32" src='/asset/reviewclass.png' width={500} height={500} alt='Review Class' />
                    <h1 className='text-xl font-bold mb-3'>Review Class</h1>
                    <p>At Shah Emdadia Freelancers, we arrange regular review classes to ensure every student fully understands the lessons. These sessions help clear doubts, strengthen weak areas, and build confidence so you can move forward in your freelancing journey with a solid foundation.</p>
                </div>
                <div className='p-6 bg-[#f8e6db] rounded-2xl shadow-sm text-[#00280B]'>
                    <Image className="h-32 w-32" src='/asset/recordedvideo.png' width={500} height={5000} alt='Class Record Videos' />
                    <h1 className='text-xl font-bold mb-3'>Class Record Videos</h1>
                    <p>Shah Emdadia Freelancers provides recorded videos of every class so you never miss a lesson. You can rewatch the sessions anytime to revise, clear doubts, and strengthen your skills at your own pace.</p>
                </div>
            </div>

        </div>
    );
};

export default WhyChoiceUs;