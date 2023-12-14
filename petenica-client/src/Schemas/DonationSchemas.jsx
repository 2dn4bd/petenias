import * as Yup from 'yup';
export const DonationCampain = Yup.object({
    max_donate: Yup.string().required('Maximum donation is Required'),
    last_date: Yup.string().required('Last Date Of Donation is Required'),
    short_description: Yup.string().required('Short Description is Required'),
    long_description: Yup.string().required('Long Description is Required'),
    pet_image:  Yup.mixed()
    .required('Pet Image is required'),
    pet_name:  Yup.mixed()
    .required('Pet name is required'),

})