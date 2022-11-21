import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            state.id= action.payload.id,
            state.name= action.payload.name,
            state.username= action.payload.username,
            state.type= action.payload.type,
            state.level= action.payload.level,
            state.exp= action.payload.exp,
            state.deaths= action.payload.deaths,
            state.health= action.payload.health,
            state.companions= action.payload.companions,
            state.guilds= action.payload.guilds
            state.invites= action.payload.invites
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer