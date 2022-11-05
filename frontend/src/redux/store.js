import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './slices/dateSlice'
import adventureReducer from './slices/adventureSlice'

export default configureStore({
    reducer: {
        date: dateReducer,
        adventure: adventureReducer,
    }
})