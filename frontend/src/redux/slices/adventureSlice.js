import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quests: []
}

export const adventureSlice = createSlice({
    name: 'adventure',
    initialState,
    reducers: {}
})

export default adventureSlice.reducer