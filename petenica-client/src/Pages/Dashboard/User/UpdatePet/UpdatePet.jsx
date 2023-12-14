import { useFormik } from 'formik';
import moment from 'moment';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

import { useState } from 'react';
import CustomSelectUpdate from '../../../../Components/CustomSelectUpdate/CustomSelectUpdate';
import { UpdatePetSchemas } from '../../../../Schemas/UpdatePetSchemas';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
const options = [
    {value: 'Dogs', label: 'Dogs'},
    {value: 'Cats', label: 'Cats'},
    {value: 'Birds', label: 'Birds'},
    {value: 'Rabbits', label: 'Rabbits'}
]

const UpdatePet = () => {
    const petData = useLoaderData()
    const {category, pet_age, pet_image, pet_name, short_description, long_description , _id, pet_location} = petData || {}
    const initialValues = {
        pet_name:pet_name ||  '',
        pet_age: pet_age || '',
        pet_location:pet_location || '',
        short_description: short_description ||'',
        long_description:long_description || '',
        pet_image:pet_image ||'',
        category: category || ''
    }
    const axiosPrivate = useAxiosPrivate()
    const axiosPublic = useAxiosPublic()
    const currentDate = moment()
    const PetAdd_Time = currentDate.format('L');
    const [num, setNum] = useState(null)

    const generateRandomNumber = () => {
      return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    };
    const {values, errors, handleChange, touched,resetForm, handleSubmit,  handleBlur, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: UpdatePetSchemas,
        onSubmit: async(values)=>{
          console.log(values);
          const {pet_image} = values
          console.log(pet_image);
          const formData = new FormData()
          
          try {
            formData.append("file", pet_image)
            formData.append("upload_preset","petenica")
            const res = await axiosPublic.post("https://api.cloudinary.com/v1_1/dqwokp3ms/image/upload", formData)
            console.log(res.data);
            if(res.data.asset_id){
              const UpdatePet = {
                pet_image:res.data.url,
                pet_name:values.pet_name,
                pet_age:values.pet_age,
                pet_location: values.pet_location,
                pet_add_time: PetAdd_Time,
                short_description: values.short_description,
                long_description:values.long_description,
                category:values.category,
                adopted:'false',
                serial_number: generateRandomNumber()
              }
              const backendSetApid = await axiosPublic.put(`/allpetsone/${_id}`,UpdatePet )
              console.log(backendSetApid.data);
              if(backendSetApid.data.modifiedCOunt > 0){
                setNum(backendSetApid.data.serial_number)
                resetForm()
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Pet Update Success",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
    })
console.log(values.category);
    return (
        <div>
          <section className="py-16 h-screen bg-gray-100 ">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 bg-white rounded-md shadow  ">
            <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900 ">Update Pet Information
            </h2>
            <form  onSubmit={handleSubmit} >
              <div className="container px-4 mx-auto" />

              <div className="grid w-full gap-4 mb-6 lg:grid-cols-2">
                <div> <label className="block mb-2 text-sm font-medium " htmlFor>Pet Name
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border  rounded   " type="Text"
                    name="pet_name"
                    value={values.pet_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                placeholder="Pet Name" />
                {errors.pet_name && touched.pet_name ? <div className="text-red-500">{errors.pet_name}</div> : null}
                </div>
                <div> <label className="block mb-2 text-sm font-medium " htmlFor>Pet Age
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " type="text"
                  name="pet_age"
                  value={values.pet_age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                   placeholder="Pet Age" />
                   {errors.pet_age && touched.pet_age ? <div className="text-red-500">{errors.pet_age}</div> : null}
                </div>
              </div>
            
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium " htmlFor='Pet Category'>Pet Category</label>
                <div className="relative">
                   <CustomSelectUpdate
                    options={options}
                   value={values.category}
                   onChange={value => setFieldValue('category',value.value)}
                   />

                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium " htmlFor>
                  Pet Location
                  </label>
                <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " type="Address"
                name="pet_location"
                value={values.pet_location}
                onChange={handleChange}
                onBlur={handleBlur}
                 placeholder="Pet Location" />
                 {errors.pet_location && touched.pet_location ? <div className="text-red-500">{errors.pet_location}</div> : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium " htmlFor>Short Description</label>
                <textarea className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " 
                        value={values.short_description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                name="short_description"

                rows={2} placeholder="Write Short Description" defaultValue={""} />
                {errors.short_description && touched.short_description ? <div className="text-red-500">{errors.short_description}</div> : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium " htmlFor>Long Description</label>
                <textarea className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " 
                        value={values.long_description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                name="long_description"
                
                rows={5} placeholder="Write Long Description" defaultValue={""} />
                {errors.long_description && touched.long_description ? <div className="text-red-500">{errors.long_description}</div> : null}
              </div>

              <div className="mb-6 ">
                <label className="block mb-2 text-sm font-medium " htmlFor>Pet Image</label>
                <label className="block pt-2">
                  <span className="sr-only ">Choose profile photo</span>
                  <input type="file"
                    name='pet_image'
                    onChange={(event) =>{
                      setFieldValue('pet_image', event.target.files[0])
                    }}
                    onBlur={handleBlur}
                   className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 " />
                   {errors.pet_image && touched.pet_image ? <div className="text-red-500">{errors.pet_image}</div> : null}
                </label>
              </div>
              <div className="mt-7">
                <div className="flex justify-start space-x-2">
                  <button type="submit" className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
        </div>
    );
};

export default UpdatePet;