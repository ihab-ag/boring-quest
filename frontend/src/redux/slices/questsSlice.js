import { createSlice } from '@reduxjs/toolkit'
import { mapQuestToDays } from '../../helpers/mapQuestToDays'

const initialState = {
    fetched: null
}
export const questsSlice = createSlice({
    name: 'quests',
    initialState: {},
    reducers: {
        setQuests: (state, action) => {
            state.map = action.payload
        },
        addQuest: (state, action) => {
            state.map = mapQuestToDays(state.map, action.payload)
        }
    }
})

export const { setQuests, addQuest, } = questsSlice.actions
export default questsSlice.reducer