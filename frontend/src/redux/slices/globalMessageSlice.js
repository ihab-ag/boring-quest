import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'welcome'
}

export const globalMessageSlice = createSlice({
    name: 'globalMessage',
    initialState,
    reducers: {
    }
})

export default globalMessageSlice.reducer