'use client';
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const API_KEY = process.env.NEXT_PUBLIC_Image_Hosting_API
const Image_UPLOAD_API = `https://api.imgbb.com/1/upload?key=${API_KEY}`



export default function sdfsdfsdfsdfsdf() {
    const [previewimg, setPreviewImg] = useState('/asset/placeholder.png');
    const [imageerr, setImageErr] = useState('')
    const [ImageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        // console.log(data);

        setLoading(true)
        // reset()


        const PhotoUrl = `${ImageURL}`;
        const CoursName = data.courses;
        const CourseType = data.coursesType;
        const EnglishName = data.fullnameEn;
        const BanglaName = data.fullnameBn;
        const StudPhone = data.Stuphone;
        const Email = data.emailaddress;
        const Gender = data.gender;
        const BloodGroup = data.blood;
        const NID = data.nid;
        const GurdName = data.guardianName;
        const GurdRelation = data.GurdRelation;
        const GurdPhone = data.Gphone;
        const FatherName = data.fatherName;
        const MotherName = data.motherName;
        const Division = data.division;
        const District = data.district;
        const Upozila = data.upazila;
        const PostOffice = data.postOffice;
        const AddressDetails = data.address;
        const PaymentMethod = data.payMethod;
        const AccountNumber = data.accountNum;
        const Amount = data.amount;
        const TransID = data.TransID;
        const Referance = data.referance;

        const FullAddress = `${AddressDetails}, ${PostOffice}, ${Upozila}, ${District}, ${Division}`
        const PaymentDetails = {
            PaymentMethod,
            AccountNumber,
            Amount,
            TransID,
            Referance
        }


        const FullData = {
            PhotoUrl,
            CoursName,
            CourseType,
            EnglishName,
            BanglaName,
            StudPhone,
            Email,
            Gender,
            BloodGroup,
            NID,
            GurdName,
            GurdRelation,
            GurdPhone,
            FatherName,
            MotherName,
            FullAddress,
            PaymentDetails
        }

        console.log("Full data befor sending to server:", FullData);




        const res = await axios.post('https://sef-server.onrender.com/api/admission/new-admission', FullData)

        console.log('Server Response:', res);



        if (res.data.Message === `${EnglishName} your Admision Details is added succesfully. We will conferm your Admission soon`) {
            setLoading(false)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${FullName} we Recive your data. we will conferm you by WhatsApp`,
                showConfirmButton: false,
                timer: 900
            });
        }


    };

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
                <div className="border border-gray-100 shadow-2xl rounded-3xl mx-5 lg:px-0 lg:w-[80%] lg:h-[95%]">
                    <div className="flex justify-between items-center lg:px-10">
                        <div className="flex justify-center">
                            <div className="w-24 h-24 lg:w-36 lg:h-36 bg-green-950 inline-flex p-4 lg:pb-8 rounded-b-full shadow-xl">
                                <Image className="p-2" src={'/asset/Logo-icon.png'} width={100} height={100} alt="logo" />
                            </div>
                        </div>

                        <h1 className="text-green-950 text-2xl lg:text-5xl font-black w-[100%] text-center mt-5 lg:mt-0">Students Admission Form</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-5 lg:p-5 mx-5 my-5 border rounded-2xl border-gray-300 flex flex-col gap-6">

                        <div className="flex items-center justify-between px-6">
                            {/* Course Details */}
                            <div className="w-[50%]">
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Course</legend>
                                    <select className="select w-full" {...register("courses", { required: true })} name="courses">
                                        <option disabled={true} selected>Select Course </option>
                                        <option>Graphics Design</option>
                                        <option>T-shirt Design</option>
                                        <option>Digital Marketing</option>
                                        <option>FrontEnd Web Development</option>
                                        <option>Full Stack Web Development</option>
                                        <option>Wordpress Development</option>
                                    </select>
                                    {errors?.courses?.type === 'required' && <p className="label text-red-600 text-base">Select your Course</p>}
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Course Type</legend>
                                    <select className="select w-full" {...register("coursesType", { required: true })} name="coursesType">
                                        <option disabled={true} selected>Course Type</option>
                                        <option>Offline</option>
                                        <option>Online</option>
                                    </select>
                                    {errors?.coursesType?.type === 'required' && <p className="label text-red-600 text-base">Select your Course Type</p>}
                                </fieldset>
                            </div>

                            {/* Profile Image */}
                            <div className="mr-20 mt-10 lg:tooltip" data-tip="Image must be square shape and less than 2 MB">
                                <div className="w-full flex flex-col items-center justify-center">
                                    <div className="w-40 h-40 rounded-full relative">
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
                        </div>

                        {/* English Name */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Student Name (English)</legend>
                            <input type="text" className="input w-full" placeholder="Write your FullName" {...register("fullnameEn", { required: true })} name="fullnameEn" />
                            {errors?.fullnameEn?.type === 'required' && <p className="label text-red-600 text-base">Please Write your Full name in English</p>}
                        </fieldset>
                        {/* Bangla Name */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Student Name (Bangla)</legend>
                            <input type="text" className="input w-full" placeholder="Write your FullName" {...register("fullnameBn", { required: true })} name="fullnameBn" />
                            {errors?.fullnameBn?.type === 'required' && <p className="label text-red-600 text-base">Please Write your Full name in Bangla</p>}
                        </fieldset>

                        <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
                            {/* WhatsApp Number */}
                            <fieldset className="fieldset w-[50%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">
                                    Phone (WhatsApp)
                                </legend>

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={11}
                                    className="input w-full"
                                    placeholder="11-digit phone number"
                                    {...register("Stuphone", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{11}$/,
                                            message: "Phone number must be exactly 11 digits",
                                        },
                                    })}
                                    name="Stuphone"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }}
                                />

                                {errors?.Stuphone?.type === "required" && (
                                    <p className="label text-red-600 text-base">
                                        Please enter your phone number
                                    </p>
                                )}

                                {errors?.Stuphone?.type === "pattern" && (
                                    <p className="label text-red-600 text-base">
                                        Phone number must be exactly 11 digits
                                    </p>
                                )}
                            </fieldset>

                            {/* Email address */}
                            <fieldset className="fieldset w-full ">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Email Address</legend>
                                <input type="email" className="input w-full" placeholder="Write your FullName" {...register("emailaddress", { required: true })} name="emailaddress" />
                                {errors?.emailaddress?.type === 'required' && <p className="label text-red-600 text-base">Please Write your email Address</p>}
                            </fieldset>
                            {/* Gender */}
                            <fieldset className="fieldset w-[30%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Gender</legend>
                                <select className="select w-full" {...register("gender", { required: true })} name="gender">
                                    <option disabled={true} selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                {errors?.gender?.type === 'required' && <p className="label text-red-600 text-base">Select your Course</p>}
                            </fieldset>
                            {/* Blood Group */}
                            <fieldset className="fieldset w-[30%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Blood Group</legend>
                                <select className="select w-full" {...register("blood", { required: true })} name="blood">
                                    <option disabled={true} selected>Blood Group</option>
                                    <option>AB+</option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>O+</option>
                                    <option>AB-</option>
                                    <option>A-</option>
                                    <option>B-</option>
                                    <option>O-</option>
                                </select>
                                {errors?.blood?.type === 'required' && <p className="label text-red-600 text-base">Select your Blood Group</p>}
                            </fieldset>
                        </div>

                        {/* nid / birth certificate Number */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend text-lg lg:text-xl font-semibold">NID/Birth Certificate Number</legend>
                            <input onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                            }} type="text" inputMode="numeric" className="input w-full" placeholder="Write your FullName" {...register("nid", { required: true })} name="nid" />
                            {errors?.nid?.type === 'required' && <p className="label text-red-600 text-base">Please Write your NID or Birth Certificate Number</p>}
                        </fieldset>


                        <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
                            {/* gurdian name */}
                            <fieldset className="fieldset w-full ">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Guardian Name</legend>
                                <input type="text" className="input w-full" placeholder="Write your FullName" {...register("guardianName", { required: true })} name="guardianName" />
                                {errors?.guardianName?.type === 'required' && <p className="label text-red-600 text-base">Please Write your Guardian Name</p>}
                            </fieldset>
                            {/* Relation with Gurdian */}
                            <fieldset className="fieldset w-[30%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Relation</legend>
                                <select className="select w-full" {...register("GurdRelation", { required: true })} name="GurdRelation">
                                    <option disabled={true} selected>Relation</option>
                                    <option>Mother</option>
                                    <option>Father</option>
                                    <option>Sister</option>
                                    <option>Brother</option>
                                    <option>Wife</option>
                                    <option>Husband</option>
                                    <option>Other</option>
                                </select>
                                {errors?.GurdRelation?.type === 'required' && <p className="label text-red-600 text-base">Select Relationship with you Guardian</p>}
                            </fieldset>
                            {/* Guradian Phone */}
                            <fieldset className="fieldset w-[50%]">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">
                                    Guardian Phone
                                </legend>

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={11}
                                    className="input w-full"
                                    placeholder="11-digit phone number"
                                    {...register("Gphone", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{11}$/,
                                            message: "Phone number must be exactly 11 digits",
                                        },
                                    })}
                                    name="Gphone"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }}
                                />

                                {errors?.Gphone?.type === "required" && (
                                    <p className="label text-red-600 text-base">
                                        Please enter your Guardian phone number
                                    </p>
                                )}

                                {errors?.Gphone?.type === "pattern" && (
                                    <p className="label text-red-600 text-base">
                                        Phone number must be exactly 11 digits
                                    </p>
                                )}
                            </fieldset>
                        </div>

                        <div className="w-full flex flex-col lg:flex-row justify-between gap-5">

                            {/* Father name */}
                            <fieldset className="fieldset w-full ">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Father's Name</legend>
                                <input type="text" className="input w-full" placeholder="Write your FullName" {...register("fatherName", { required: true })} name="fatherName" />
                                {errors?.fatherName?.type === 'required' && <p className="label text-red-600 text-base">Please Write your Father's name</p>}
                            </fieldset>
                            {/* mother name */}
                            <fieldset className="fieldset w-full ">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Mother's Name</legend>
                                <input type="text" className="input w-full" placeholder="Write your FullName" {...register("motherName", { required: true })} name="motherName" />
                                {errors?.motherName?.type === 'required' && <p className="label text-red-600 text-base">Please Write your Mother's Name</p>}
                            </fieldset>
                        </div>

                        <div className="border-2 border-gray-200 p-4 rounded-2xl my-6">
                            <p className="bg-white p-2 -mt-10 text-xl font-bold w-fit">Address</p>

                            {/* division */}
                            <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
                                <fieldset className="fieldset w-[30%]">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Division</legend>
                                    <select className="select w-full" {...register("division", { required: true })} name="division">
                                        <option disabled={true} selected>Select your Division</option>

                                    </select>
                                    {errors?.division?.type === 'required' && <p className="label text-red-600 text-base">Select your Division</p>}
                                </fieldset>
                                {/* District */}
                                <fieldset className="fieldset w-[30%]">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">District</legend>
                                    <select className="select w-full" {...register("district", { required: true })} name="district">
                                        <option disabled={true} selected>Select your District</option>

                                    </select>
                                    {errors?.district?.type === 'required' && <p className="label text-red-600 text-base">Select your District</p>}
                                </fieldset>

                                {/* upazila  */}
                                <fieldset className="fieldset w-[30%]">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Upazila/Thana</legend>
                                    <select className="select w-full" {...register("upazila", { required: true })} name="upazila">
                                        <option disabled={true} selected>Select Your Upazila</option>

                                    </select>
                                    {errors?.upazila?.type === 'required' && <p className="label text-red-600 text-base">Select your Upazila</p>}
                                </fieldset>
                                {/* Post Office */}
                                <fieldset className="fieldset w-[30%]">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Post Office</legend>
                                    <select className="select w-full" {...register("postOffice", { required: true })} name="postOffice">
                                        <option disabled={true} selected>Select Your Post Office</option>

                                    </select>
                                    {errors?.postOffice?.type === 'required' && <p className="label text-red-600 text-base">Select Your Post Office</p>}
                                </fieldset>
                            </div>
                            {/* address */}
                            <fieldset className="fieldset w-full ">
                                <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Area Name/House Name/Road Number</legend>
                                <input type="text" className="input w-full" placeholder="Write your FullName" {...register("address", { required: true })} name="address" />
                                {errors?.address?.type === 'required' && <p className="label text-red-600 text-base">Please Write Correct address</p>}
                            </fieldset>
                        </div>

                        <div className="bg-red-50 border-2 border-red-200 w-full p-3   rounded-xl">
                            <p className="text-center font-bold text-3xl mb-3">Payments</p>

                            <div className="flex gap-4 flex-nowrap">
                                {/* payment Method */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Payment Method</legend>
                                    <select className="select w-full" {...register("payMethod", { required: true })} name="payMethod">
                                        <option disabled={true} selected>Payment Method</option>
                                        <option>Bkash</option>
                                        <option>Nagad</option>
                                        <option>Cash</option>
                                    </select>
                                    {errors?.payMethod?.type === 'required' && <p className=" text-red-600 text-base">Select your Payment Method</p>}
                                </fieldset>

                                {/* account Number */}
                                <fieldset className="fieldset  w-full">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">
                                        Account Number
                                    </legend>

                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={11}
                                        className="input w-full"
                                        placeholder="11-digit phone number"
                                        {...register("accountNum", {
                                            required: true,
                                            pattern: {
                                                value: /^[0-9]{11}$/,
                                                message: "Phone number must be exactly 11 digits",
                                            },
                                        })}
                                        name="accountNum"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                        }}
                                    />

                                    {errors?.accountNum?.type === "required" && (
                                        <p className="w-[50%] text-red-600 text-base">
                                            Please enter your Account number
                                        </p>
                                    )}

                                    {errors?.accountNum?.type === "pattern" && (
                                        <p className=" w-[50%] text-red-600 text-base">
                                            Account number must be exactly 11 digits
                                        </p>
                                    )}
                                </fieldset>
                                {/* Amount */}
                                <fieldset className="fieldset  w-full">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">
                                        Amount
                                    </legend>

                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={11}
                                        className="input w-full"
                                        placeholder="Amount"
                                        {...register("amount", {
                                            required: true,
                                            pattern: {
                                                value: /^[0-9]{11}$/,
                                                message: "Phone number must be exactly 11 digits",
                                            },
                                        })}
                                        name="amount"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                        }}
                                    />

                                    {errors?.amount?.type === "required" && (
                                        <p className=" text-red-600 text-base">
                                            Please enter your Paid amount
                                        </p>
                                    )}
                                </fieldset>

                                {/* Trans ID */}
                                <fieldset className="fieldset w-full ">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Transaction ID</legend>
                                    <input type="text" className="input w-full" placeholder="Write your FullName" {...register("TransID", { required: true })} name="TransID" />
                                    {errors?.TransID?.type === 'required' && <p className=" text-red-600 text-base">Please Write your Full name in Bangla</p>}
                                </fieldset>

                                {/* Referance */}
                                <fieldset className="fieldset w-full ">
                                    <legend className="fieldset-legend text-lg lg:text-xl font-semibold">Referance</legend>
                                    <input type="text" className="input w-full" placeholder="Write your FullName" {...register("referance", { required: true })} name="referance" />
                                    {errors?.referance?.type === 'required' && <p className=" text-red-600 text-base">Please Write your Full name in Bangla</p>}
                                </fieldset>
                            </div>

                        </div>


                        {
                            loading ? <button className="w-full rounded-full mt-10 bg-green-950 text-white font-semibold text-lg lg:text-2xl py-2 border-transparent border hover:bg-transparent hover:text-green-950 hover:border-green-950 duration-300" ><span className="loading loading-dots loading-md"></span></button> : <button className="w-full rounded-full mt-10 bg-green-950 text-white font-semibold text-lg lg:text-2xl py-2 border-transparent border hover:bg-transparent hover:text-green-950 hover:border-green-950 duration-300" ><input type="submit" value={'Submit Your Form'} /></button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
