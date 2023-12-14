import { useFormik } from 'formik';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { updateDonate } from '../../../../Schemas/editDonate';


const EditDonate = () => {
    const donateCampainInfo = useLoaderData()
    const {max_donate, last_date, short_description, long_description, pet_name, _id} = donateCampainInfo ||{}
    const initialValues = {
        max_donate: max_donate || '',
        last_date: last_date || '',
        short_description: short_description ||'',
        long_description: long_description ||'',
        pet_image:'',
        pet_name: pet_name ||  ''
    }
    const axiosPublic = useAxiosPublic()

    const {values, errors, handleChange, touched,resetForm, handleSubmit,  handleBlur, setFieldValue} = useFormik({
        initialValues: initialValues,
        validationSchema: updateDonate,
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
              const UpdateDonation = {
                max_donate:values.max_donate,
                last_date:values.last_date,
                short_description: values.short_description,
                long_description:values.long_description,
                pet_name: values.pet_name
              }
              const backendSetApi = await axiosPublic.put(`/editDonate/${_id}`,UpdateDonation )
              console.log(backendSetApi.data);
              if(backendSetApi.data.modifiedCount > 0){
                resetForm()
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Donate Edit Success",
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

    return (
        <div>
          <section className="py-16 h-screen bg-gray-100 ">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 bg-white rounded-md shadow  ">
            <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900 "> Update donate Information
            </h2>
            <form  onSubmit={handleSubmit} >
              <div className="container px-4 mx-auto" />

              <div className="grid w-full gap-4 mb-6 lg:grid-cols-2">
                <div> <label className="block mb-2 text-sm font-medium " htmlFor>Maximum Donation
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " type="Text"
                    name="max_donate"
                    value={values.max_donate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                placeholder="Maximum Donation" />
                {errors.max_donate && touched.max_donate ? <div className="text-red-500">{errors.max_donate}</div> : null}
                </div>
                <div> <label className="block mb-2 text-sm font-medium " htmlFor>Last date of Donation
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " type="date"
                  name="last_date"
                  value={values.last_date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                   placeholder="Last date of Donation" />
                   {errors.last_date && touched.last_date ? <div className="text-red-500">{errors.last_date}</div> : null}
                </div>
              </div>

              <div> <label className="block mb-2 text-sm font-medium " htmlFor>Pet Name
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded   " type="Text"
                    name="pet_name"
                    value={values.pet_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                placeholder="Pet Name" />
                {errors.pet_name && touched.max_donate ? <div className="text-red-500">{errors.pet_name}</div> : null}
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

export default EditDonate;