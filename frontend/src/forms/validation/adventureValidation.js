import * as yup from 'yup'
import { currentDay } from '../../helpers/currentDate'

const adventureValidationSchema = yup.object({
    title: yup.string()
        .required()
        .min(3)
        .max(20),
    description: yup.string()
        .required()
        .min(3),
    date: yup.date()
    .min(new Date(currentDay -1 )),
    quests: yup.array()
    .test({
        message: 'adventure must have at least 2 quests',
        test: arr => arr.length > 1,
      })
})

export default adventureValidationSchema
