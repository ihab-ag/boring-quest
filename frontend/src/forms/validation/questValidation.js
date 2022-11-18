import * as yup from 'yup'
import { currentDay } from '../../helpers/currentDate'

const questValidationSchema = yup.object({
    name: yup.string()
        .required()
        .min(3)
        .max(20),
    description: yup.string()
        .required()
        .min(3),
    asignee: yup.string(),
    due: yup.date()
    .min(new Date(currentDay -1 )),
    type: yup.string()
    .oneOf['todo','daily','weekly','monthly','adventure'],
    difficulty:yup.string()
    .oneOf['easy','medium','hard']
})

export default questValidationSchema