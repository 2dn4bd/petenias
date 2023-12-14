import * as Yup from 'yup';
export const UpdatePetSchemas = Yup.object({
    pet_name: Yup.string().required('Pet Name is Required'),
    pet_age: Yup.string().required('Pet Age is Required'),
    pet_location: Yup.string().required('Pet Location is Required'),
    short_description: Yup.string().required('Short Description is Required'),
    long_description: Yup.string().required('Long Description is Required'),
    pet_image:  Yup.mixed()
    .required('Pet Image is required'),

})