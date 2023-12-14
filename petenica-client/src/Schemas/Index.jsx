import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    photo:Yup.string().required('Photo URL is Required'),
    email: Yup.string().email('Invalid email').required('E-mail is Required'),
    password: Yup.string()
    .required('Please Enter your password').matches(
        /([A-Z]+[a-z@$%#&])/g,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ).min(6),
})