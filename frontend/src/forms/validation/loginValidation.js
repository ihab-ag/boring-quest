import * as yup from 'yup'

const loginValidationSchema = yup.object({
    username: yup.string()
        .required()
        .min(3)
        .max(30),
    password: yup.string()
        .required()
        .min(3),
})

export default loginValidationSchema