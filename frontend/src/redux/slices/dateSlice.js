import { createSlice } from '@reduxjs/toolkit'
import { currentDay, currentMonth, currentYear, getMonthDays } from '../../helpers/currentDate'

const month = currentMonth
const year = currentYear
const day = currentDay
const days = getMonthDays(year, month)


const initialState = {
    days,
    day,
    month,
    year
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
       
    }
})

export default dateSlice.reducer