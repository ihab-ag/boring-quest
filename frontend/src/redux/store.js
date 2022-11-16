import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './slices/dateSlice'
import adventureReducer from './slices/adventureSlice'
import globalMessageReducer from './slices/globalMessageSlice'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

export default store = configureStore({
    reducer: {
        date: dateReducer,
        adventure: adventureReducer,
        globalMessage: globalMessageReducer,
        auth: authReducer,
        user: userReducer
    }
})