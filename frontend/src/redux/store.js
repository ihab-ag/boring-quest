import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './slices/dateSlice'
export default configureStore({
    reducer: {
        date: dateReducer
    }
})