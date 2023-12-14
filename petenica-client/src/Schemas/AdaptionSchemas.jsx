import * as Yup from 'yup';
export const AdeptionSchemas = Yup.object({
    phone: Yup.string().required('Phone Number is Required'),
    address: Yup.string().required('Address is Required')
})