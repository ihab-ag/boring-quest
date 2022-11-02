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
        setMonth: (state, action) => {
            state.month = action.payload
            state.days = getMonthDays(state.year, state.month)
            state.day = 1
        },
        
    }
})

export const { setMonth } = dateSlice.actions
export default dateSlice.reducer