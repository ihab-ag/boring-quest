import * as yup from 'yup'

const loginValidationSchema = yup.object({
    name: yup.string()
    .required(),
    username: yup.string()
        .required()
        .min(3)
        .max(30),
    password: yup.string()
        .required()
        .min(8)
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/mg, "password must have upper, lower and number characters")
})

export default loginValidationSchema