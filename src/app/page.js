import Container from "@/components/Container";
import Bootcamps from "@/components/home/Bootcamps";
import ConsultantSection from "@/components/home/ConsultantSection";
import HeroSection from "@/components/home/HeroSection";
import OurCourses from "@/components/home/OurCourses";
import UpCommingSeminer from "@/components/home/UpCommingSeminer";
import WhyChoiceUs from "@/components/home/WhyChoiceUs";
import Image from "next/image";



export default function Home() {

  const Courses = [
    {
      id: 1,
      Name: 'Graphics Design',
      Duration: '6 month',
      TumbnillUrl: '/asset/courses/graphics.jpg',
      next: '#slide2',
      priveus: '#slide4'
    },
    {
      id: 2,
      Name: 'T-Shirt Design',
      Duration: '6 month',
      TumbnillUrl: '/asset/courses/tshirt.jpg',
      next: '#slide3',
      priveus: '#slide1'
    },
    {
      id: 3,
      Name: 'Web development',
      Duration: '6 month',
      TumbnillUrl: '/asset/courses/wordpress.jpg',
      next: '#slide4',
      priveus: '#slide2'
    },
    {
      id: 4,
      Name: 'Digital Marketing',
      Duration: '6 month',
      TumbnillUrl: '/asset/courses/dm.jpg',
      next: '#slide1',
      priveus: '#slide3'
    },
    {
      id: 5,
      Name: 'UI/UX Design',
      Duration: '6 month',
      TumbnillUrl: '/asset/courses/uiux.jpg',
      next: '#slide1',
      priveus: '#slide3'
    },

  ]

  return (
    // <Container>
    //   {/* <HeroSection/>
    //   <ConsultantSection/>
    //   <Bootcamps/>
    //   <UpCommingSeminer/>
    //   <OurCourses/>
    //   <WhyChoiceUs/> */}
    // </Container>

    <section className="lg:h-screen lg:max-w-4/5 mx-auto p-5 text-center flex flex-col gap-2 justify-center">
      <h1 className="text-5xl ">
        Welcome To <span className="font-semibold text-green-950">{"Shah Emdadia Freelancers'"}</span>
      </h1>
      <p className="text-2xl uppercase text-red-500">our Website is under Constraction Please Stay with us</p>


      <div className="mt-5 w-[75%] mx-auto rounded-2xl">
        <h1 className="text-2xl font-bold uppercase">
          our Courses
        </h1>


        <div className="">
          <div className='flex flex-wrap justify-center items-center gap-3 py-6'>
            {
              Courses?.map((course) =>

                <div key={course.id} className='bg-white p-4 rounded-2xl shadow-xl'>
                  <div className="card bg-base-100 ">
                    <figure>
                      <Image className="w-full rounded-xl h-44" src={course.TumbnillUrl} width={400} height={400} alt={course.Name} />
                    </figure>
                    <div className="card-body pl-0">
                      <h2 className="card-title font-bold">{course.Name}</h2>
                      <p className="text-left">Duration: {course.Duration}</p>
                    </div>
                  </div>
                </div>

              )
            }

          </div>
        </div>
      </div>

      <div className="px-5 py-2 text-center  bg-green-100 border-none rounded-full flex items-center justify-center">
        <p className="lg:text-3xl">Contact with us:</p>
      <p className="ml-10 font-bold lg:text-3xl">+880 1817-121469, +880 1316-765066, +880 1757-549926</p>
      </div>
      


    </section>
  );
}
