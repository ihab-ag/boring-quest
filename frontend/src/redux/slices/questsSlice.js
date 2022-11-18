import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fetched: null
}
export const questsSlice = createSlice({
    name: 'quests',
    initialState: {},
    reducers: {
        setQuests: (state, action) => {
            state.array = action.payload
        },
        setFetchedQuest: (state, action) => {
            state.array = [...state.array,action.payload]
        }
    }
})

export const { setQuests, setFetchedQuest } = questsSlice.actions
export default questsSlice.reducer