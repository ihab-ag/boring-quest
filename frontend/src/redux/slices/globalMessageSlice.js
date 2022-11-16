import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'welcome'
}

export const globalMessageSlice = createSlice({
    name: 'globalMessage',
    initialState,
    reducers: {
        setMessage: (state, action)=>{
            state.status = action.payload
        }
    }
})


export const { setMessage } = globalMessageSlice.actions
export default globalMessageSlice.reducer