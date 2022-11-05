import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quests: []
}

export const adventureSlice = createSlice({
    name: 'adventure',
    initialState,
    reducers: {
        addQuest: (state, action) => {

            state.quests.push(action.payload)
        }
    }
})

export const { addQuest } = adventureSlice.actions
export default adventureSlice.reducer