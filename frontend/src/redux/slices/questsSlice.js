import { createSlice } from '@reduxjs/toolkit'
import { afternoon, midnight, morning, night } from '../../constants/Data'
import { mapQuestToDays } from '../../helpers/mapQuestToDays'

const initialState = {
    midnight: midnight,
    morning: morning,
    afternoon: afternoon,
    night: night,
    total_quests: 0,
    total_submitted: 0,
    bar_data: []
}
export const questsSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {
        setQuests: (state, action) => {
            state.map = action.payload
        },
        addQuest: (state, action) => {
            state.map = mapQuestToDays(state.map, action.payload)
        },
        setData: (state, action) => {
            state.midnight = action.payload[0]
            state.morning = action.payload[1]
            state.afternoon = action.payload[2]
            state.night = action.payload[3]
            state.total_quests = action.payload[4]
            state.total_submitted = action.payload[5]
            state.bar_data = action.payload[6]
        }
    }
})

export const { setQuests, addQuest, setData } = questsSlice.actions
export default questsSlice.reducer