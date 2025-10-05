'use client';
import Container from "@/components/Container";
import axios from "axios";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const API_KEY = process.env.NEXT_PUBLIC_Image_Hosting_API
const Image_UPLOAD_API = `https://api.imgbb.com/1/upload?key=${API_KEY}`



export default function ReviewForm() {
    const [previewimg, setPreviewImg] = useState('/asset/placeholder.png');
    const [imageerr, setImageErr] = useState('')
    const [Characters, setCharacters] = useState(0)
    const [ImageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    // const reviewText = watch("review") || "";

    const onSubmit = async (data) => {
        setLoading(true)
        reset()


        const PhotoUrl = `${ImageURL}`;
        const FullName = data.fullname;
        const CoursName = data.courses;
        const Review = data.review;


        const res = await axios.post('https://sef-server.onrender.com/reviews', { PhotoUrl, FullName, CoursName, Review })


        if (res.data.Message === `${FullName} your review is added succesfully..`) {
            setLoading(false)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${FullName} your review is added succesfully..`,
                showConfirmButton: false,
                timer: 900
            });
        }


    };


    const reviewText = watch("review") || "";


    const handleImageChange = async (e) => {
        setImageErr('')
        const file = e.target.files?.[0];

        if (!file) return;


        const isValidType = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isValidType) {
            setImageErr('Please upload a JPG or PNG image.');
            setPreviewImg('/asset/placeholder.png');
            return;
        }


        const isValidSize = file.size <= 2 * 1024 * 1024;
        if (!isValidSize) {
            setImageErr('Image must be under 2MB.');
            setPreviewImg('/asset/placeholder.png');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new window.Image();
            img.onload = async () => {
                if (
                    img.width !== img.height ||
                    img.width < 300 ||
                    img.width > 600
                ) {
                    setImageErr('Image must be square and between 300x300 and 600x600 pixels.');
                    setPreviewImg('/asset/placeholder.png');
                } else {
                    setImageErr('');
                    setPreviewImg(event.target.result);
                    const formData = new FormData();
                    formData.append('image', file);



                    const res = await axios.post(Image_UPLOAD_API, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    setImageURL(res.data.data.display_url);
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);


    };


    return (

        <div className="lg:max-w-7xl mx-auto">
            <div className="lg:flex lg:justify-center lg:items-center my-5 lg:my-10 ">
                <div className="border border-gray-100 shadow-2xl rounded-3xl mx-5 lg:px-0 lg:w-[50%] lg:h-[95%]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center">
                            <div className="w-24 h-24 lg:w-36 lg:h-36 bg-green-950 inline-flex p-4 lg:pb-8 rounded-b-full shadow-xl">
                                <Image className="p-2" src={'/asset/Logo-icon.png'} width={100} height={100} alt="logo" />
                            </div>
                        </div>

                        <h1 className="text-green-950 text-2xl lg:text-4xl font-black w-[60%] text-center mt-5">Thank you For you Review</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-5 lg:p-5 mx-5 my-5 border rounded-2xl border-gray-300">

                        <div className="w-full lg:tooltip" data-tip="Image must be square shape and less than 2 MB">

                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="w-40 h-40  rounded-full relative">
                                <input
                                    {...register("image",)}
                                    name="image"
                                    className='hidden z-20 w-40 h-40 '
                                    type="file"
                                    accept="image.jpg, image/png, image/    "
                                    onChange={handleImageChange}
                                    id='fileInput'
                                />
                                <label
                                    htmlFor="fileInput"
                                    className='w-13 h-13 absolute bottom-0 right-0 border-2 rounded-full  border-white bg-white z-20 flex justify-center items-center'
                                >
                                    <p className="text-2xl font-bold">+</p>
                                </label>
                                <div className='absolute top-0 w-40 h-40 mx-auto z-10'>
                                    <Image className="rounded-full" src={previewimg} width={500} height={500} style={{ objectFit: 'cover' }} alt="Profile pic" />

                                </div>
                            </div>
                            <p className="text-red-600 text-base">{imageerr ? imageerr : ''}</p>
                        </div>
                        </div>


                        <div className="flex items-center w-full gap-3 lg:gap-6">
                            <fieldset className="fieldset w-[70%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Student Name</legend>
                                <input type="text" className="input w-full" placeholder="Write your FullName" {...register("fullname", { required: true })} name="fullname" />
                                {errors?.fullname?.type === 'required' && <p className="label text-red-600 text-base">Please Write your Full name</p>}
                            </fieldset>
                            <fieldset className="fieldset w-[30%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Course</legend>
                                <select className="select w-full" {...register("courses", { required: true })} name="courses">
                                    <option disabled={true}>Sellect Course </option>
                                    <option>Graphics Design</option>
                                    <option>T-shirt Design</option>
                                    <option>Digital Marketing</option>
                                    <option>FrontEnd Web Development</option>
                                    <option>Full Stack Web Development</option>
                                    <option>Wordpress Development</option>
                                </select>
                                {errors?.courses?.type === 'required' && <p className="label text-red-600 text-base">Select your Course</p>}
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Review</legend>

                            <textarea
                                maxLength={600}
                                className="textarea h-24 w-full"
                                placeholder="Your Review"
                                {...register("review", { required: true })}
                                name="review"
                            />

                            <div className="flex justify-between">
                                {errors?.review?.type === 'required' && (
                                    <p className="label text-red-600 text-base">Please Write your Review</p>
                                )}
                                <p className="text-right pr-2">{`${reviewText.length}/600`}</p>
                            </div>
                        </fieldset>

                        {
                            loading ? <button className="w-full rounded-full mt-10 bg-green-950 text-white font-semibold text-lg lg:text-2xl py-2 border-transparent border hover:bg-transparent hover:text-green-950 hover:border-green-950 duration-300" ><span className="loading loading-dots loading-md"></span></button> : <button className="w-full rounded-full mt-10 bg-green-950 text-white font-semibold text-lg lg:text-2xl py-2 border-transparent border hover:bg-transparent hover:text-green-950 hover:border-green-950 duration-300" ><input type="submit" value={'Submit Your Review'} /></button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}