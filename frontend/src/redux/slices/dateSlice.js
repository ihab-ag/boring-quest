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
        incrementYear: state => {
            state.year+= 1
            state.days = getMonthDays(state.year, state.month)
            state.day = 1
        },
        decrementYear: state => {
            state.year-= 1
            state.days = getMonthDays(state.year, state.month)
            state.day = 1
        },
        setDay: (state, action) => {
            state.day = action.payload
        }
    }
})

export const { setMonth, incrementYear, decrementYear, setDay } = dateSlice.actions
export default dateSlice.reducer