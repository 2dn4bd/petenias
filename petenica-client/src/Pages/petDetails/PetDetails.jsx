import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import { useFormik } from 'formik';
import { AdeptionSchemas } from "../../Schemas/AdaptionSchemas";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import useRequestedPet from "../../Hooks/useRequestedPet";
const PetDetails = () => {
    const [refetch] = useRequestedPet()
    const singlepet = useLoaderData()
    const {pet_name, pet_image, pet_age, pet_location, _id, adopt_sender_email} = singlepet || {}
    const [showModal, setShowModal] = useState(false)
    const {user} = useAuth()
    const user_email = user?.email;
    const user_name = user?.displayName;
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPrivate = useAxiosPrivate()
    const Modal = () =>{
        const initialValues = {
            phone: '',
            address: ''
        }
        const {values, errors, handleChange, touched,resetForm, handleSubmit,  handleBlur} = useFormik({
            initialValues: initialValues,
            validationSchema:AdeptionSchemas,
            onSubmit: (values) =>{
                resetForm()
                console.log(values);
                const adoptInfo = {
                    pet_id: _id,
                    user_email: user_email,
                    user_name: user_name,
                    user_phone: values.phone,
                    user_address: values.address,
                    adopt_sender_email: adopt_sender_email
                }
                if(user && user.email){
                axiosPrivate.post('/adoptedreq', adoptInfo)
                .then(res =>{
                    if(res.data.insertedId){
                       toast.success("Pet Adop Request Success!",{
                        position: toast.POSITION.TOP_CENTER
                       })
                    }
                    refetch()
                })
                }else{
                    Swal.fire({
                        title: "Sorry! You are not Logged In",
                        text: "Login to adopt pet",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes,I'll Login"
                    }).then((result) => {
                        if (result.isConfirmed) {
                        navigate("/login", {state: {from: location}})
                        }
                    });
                }
            }
        })
        return<>
        <div 
    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
    <ToastContainer></ToastContainer>
        <div className="relative bg-white rounded-lg shadow ">
            <button onClick={() => setShowModal(false)} type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
            </button>

            <div className="p-5">
                <h3 className="text-2xl mb-0.5 font-medium"></h3>
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                    <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                    Shelter a pet to forever in your home
                    </p>
                    <p className="mt-2 text-sm leading-4 text-slate-600">
                        You must be input phone number and address for adopt pet 
                    </p>
                </div>
                <div className="mt-7 flex flex-col gap-2">
                </div>
                <form  onSubmit={handleSubmit} className="w-full my-10">
                <label  className="ml-1">User Name</label>
                <input type="text"
                 name="user_name"
                  id=""
                defaultValue={user_name} disabled className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>

                <label  className="ml-1">User E-mail</label>
                <input type="email"
                name="user_email"
                id=""
                defaultValue={user_email}
                disabled className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>

                <label  className="ml-1">Phone Number</label>
                <input type="tel"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                id="" maxLength="11" title="Eleven digits code" placeholder="Phone Number" className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>
                {errors.phone && touched.phone ? <div className="text-red-500">{errors.phone}</div> : null}

                <label  className="ml-1 ">Address</label>
                <input 
                type="Address"
                name="address"
                id=""
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Address Here" className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>
                {errors.address && touched.address ? <div className="text-red-500">{errors.address}</div> : null}
                <div>
                    <button type="submit" className="flex items-center mt-3 justify-center w-full p-4 bg-[#0D9488] shadow-md shadow-orange-500-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                        Submit
                    </button>
                    
                </div>
                </form>

            </div>
        </div>
    </div>
</div>
        </>
    }
    return (
        <div className="h-screen">
            <section className="py-10 font-poppins ">
<div className="max-w-6xl px-4 mx-auto">
<div className="flex flex-wrap mb-24 items-center -mx-4">
<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
<div className="sticky top-0 overflow-hidden ">
<div className="relative mb-6 lg:mb-10 lg:h-96">
<a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
</a>
<img className="object-contain w-full lg:h-full" src={pet_image} alt=""/>
<a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
</a>
</div>
</div>
</div>
<div className="w-full px-4 md:w-1/2">
<div className="lg:pl-20">
<div className="">
        <div className="flex mb-2 items-center gap-2">
        <h2 className="max-w-xl mt-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
            Pet Name :<span className="ml-3 text-xl font-normal ">{pet_name} </span>
        </h2>
        </div>
<div className="flex flex-wrap items-center">
</div>
<p className="inline-block text-2xl mb-2 font-semibold text-gray-700  ">
<span>Pet Age: </span>
<span className="ml-3 text-xl font-normal ">{pet_age} year</span>
</p>
</div>
<div className="mb-6">
<h2 className="max-w-xl  text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
            Pet Location :<span className="ml-3 text-xl font-normal ">{pet_location} </span>
        </h2>
</div>
<div className="mb-6 "></div>
<div className="flex gap-4 mb-6">
        <button onClick={() =>setShowModal(true)} className="w-full px-4 py-3 text-center text-gray-100 bg-teal-600 border border-transparent  hover:border-teal-500 hover:text-teal-700 hover:bg-teal-100   rounded-xl">Adopt
        </button>
        {showModal && <Modal/>}
</div>
</div>
</div>
</div>
</div>
</section>
        </div>
    );
};

export default PetDetails;