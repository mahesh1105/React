import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

// Value stored in the store can only be changed using the reducers
// That needs to be exported from Slice File