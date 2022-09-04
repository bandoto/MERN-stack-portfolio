import { configureStore } from '@reduxjs/toolkit'
import postSlice from './features/post/postSlice'
import authSlice from './features/auth/authSlice'
import workSlice from './features/work/workSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        work: workSlice
    }
})