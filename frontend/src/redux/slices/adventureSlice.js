import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quests: []
}

export const adventureSlice = createSlice({
    name: 'adventure',
    initialState,
    reducers: {
        addAdventureQuest: (state, action) => {
            state.quests.push({...action.payload, status: 'delete'})
        },
        emptyQuests: state => {
            state.quests = []
        },
        removeQuest: (state, action) => {
            state.quests = state.quests.filter((quest, index) => index !== action.payload)
        }
    }
})

export const { addAdventureQuest, emptyQuests, removeQuest } = adventureSlice.actions
export default adventureSlice.reducer