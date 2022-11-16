import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './slices/dateSlice'
import adventureReducer from './slices/adventureSlice'
import globalMessageReducer from './slices/globalMessageSlice'

export default configureStore({
    reducer: {
        date: dateReducer,
        adventure: adventureReducer,
        globalMessage: globalMessageReducer,
    }
})