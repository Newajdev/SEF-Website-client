'use client';   
import { useState } from "react";
import Container from '@/components/Container';
import Image from "next/image";

const Profile = () => {
    const [ImgError, setImgError] = useState('')
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                setImgError(`your file size is ${file.size} which is more the 100 KB`)
                setImage(null)
            }
            const img = new Image();
            img.src = URL.createObjectURL(file)

            img.onload = () => {

                if (img.width !== img.height) {
                    setImgError(`please make sure your image ratio is 1:1`)
                    setImage(null)
                } else {
                    setImgError(``)
                    setImage(img.src)
                }
            }

        }
    };

    return (
        <Container>
            <p className="flex flex-col">Hello <span className=" text-2xl font-medium text-[#14ADA6]">Hasan</span></p>

            <div className="flex flex-col justify-center items-center">
                <div className="w-40 h-40  rounded-full relative border">
                    <input
                        className='hidden z-20'
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        id='fileInput'
                    />
                    <label
                        htmlFor="fileInput"
                        className='w-13 h-13 absolute bottom-0 right-0 border-2 rounded-full  border-white bg-white z-20 flex justify-center items-center'
                    >
                        <p>+</p>
                    </label>
                    <div className='absolute top-0 w-40 h-40 mx-auto z-10'>
                        <Image src={'/assets/placeholder.png'} width={100} height={100}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Profile;