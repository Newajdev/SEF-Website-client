import React from 'react';
import OutlineBtn from "@/components/OutlineBtn";
import PriemaryBtn from "@/components/PriemaryBtn";
import Image from "next/image";

const HeroSection = () => {
    const Courses = [
    {
      id: 1,
      Name: 'Graphics Design',
      Duration: '6 month || 360 hours',
      TumbnillUrl: 'https://picsum.photos/200/300',
      next: '#slide2',
      priveus: '#slide4'
    },
    {
      id: 2,
      Name: 'T-Shirt Design',
      Duration: '6 month || 360 hours',
      TumbnillUrl: 'https://picsum.photos/200/300',
      next: '#slide3',
      priveus: '#slide1'
    },
    {
      id: 3,
      Name: 'Web design',
      Duration: '6 month || 360 hours',
      TumbnillUrl: 'https://picsum.photos/200/300',
      next: '#slide4',
      priveus: '#slide2'
    },
    {
      id: 4,
      Name: 'Digital Marketing',
      Duration: '6 month || 360 hours',
      TumbnillUrl: 'https://picsum.photos/200/300',
      next: '#slide1',
      priveus: '#slide3'
    },

  ]

    return (
       <div className="flex items-center py-28">
        <div className="">
          <h1 className="w-full text-5xl font-bold flex flex-col gap-y-3 text-[#00280B] mb-7">
            Empower your Skill
            <span>to Shape your future</span>
          </h1>
          <p className="text-2xl text-[#00280B]">
            Transform the country’s manpower into a Skilled workforce. Join any of your professional course and become a self-reliant and successfull person.
          </p>
          <h5 className="text-2xl font-semibold text-[#00280B] mt-2">Join Today and Track your Changes</h5>

          <div className="mt-8 space-x-6">
            <PriemaryBtn title={'Contact us'} />
            <OutlineBtn title={'join Bootcamps'} />
          </div>
        </div>

        {/* carosol */}
        <div className="mx-auto">
          <div className="carousel w-full">
            {
              Courses?.map((item, index) =>
                <div key={index} id={`slide${index + 1}`} className="carousel-item w-full flex flex-col items-center justify-center gap-y-5">

                  <div className="w-[70%]  p-5 bg-white rounded-2xl shadow-xl">
                    <div className="card bg-base-100">
                      <figure>
                        <Image className="w-full rounded-xl h-56" src={item.TumbnillUrl} width={50} height={50} alt={item.Name} />
                      </figure>
                      <div className="card-body pb-0  w-full">
                        <h2 className="card-title">{item.Name}</h2>
                        <p>Duration: {item.Duration}</p>
                        <div className="card-actions justify-end mt-2">
                          <PriemaryBtn title={'View detials'}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-x-6">
                    <a href={item.priveus} className="btn btn-circle bg-[#F2762F] text-white">❮</a>
                    <a href={item.next} className="btn btn-circle bg-[#F2762F] text-white">❯</a>
                  </div>
                </div>
              )
            }
          </div>

        </div>
      </div>
    );
};

export default HeroSection;