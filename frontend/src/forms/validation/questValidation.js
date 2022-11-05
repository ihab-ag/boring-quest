import * as yup from 'yup'
import { currentDay } from '../../helpers/currentDate'

const questValidationSchema = yup.object({
    title: yup.string()
        .required()
        .min(3)
        .max(20),
    description: yup.string()
        .required()
        .min(3),
    asignee: yup.string(),
    date: yup.date()
    .min(new Date(currentDay -1 )),
    type: yup.string()
    .oneOf['todo','daily','weekly','monthly'],
    difficulty:yup.string()
    .oneOf['easy','medium','hard']
})

export default questValidationSchema