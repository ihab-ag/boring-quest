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
        },
        emptyQuests: state => {
            state.quests = []
        },
        removeQuest: (state, action) => {
            state.quests = state.quests.filter((quest, index) => index !== action.payload)
        }
    }
})

export const { addQuest, emptyQuests, removeQuest } = adventureSlice.actions
export default adventureSlice.reducer