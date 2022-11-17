import { createSlice } from '@reduxjs/toolkit'

export const questsSlice = createSlice({
    name: 'quests',
    initialState: {},
    reducers: {
        setQuests: (state, action) => {
            state.array = action.payload
        }
    }
})

export const { setQuests } = questsSlice.actions
export default questsSlice.reducer