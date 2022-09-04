import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    posts: [],
    loading: false,
    status: null
}

export const createPost = createAsyncThunk(
    'post/createPost',
    async (params) => {
        try {
            const { data } = await axios.post('/posts', params)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const getAllPosts = createAsyncThunk(
    'post/getAllPosts',
    async () => {
        try {
            const { data } = await axios.get('/posts')
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [createPost.pending]: (state) => {
            state.loading = true
            state.status = null
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false
            state.status = action.payload.message
            state.posts.push(action.payload)
        },
        [createPost.rejected]: (state, action) => {
            state.status = action.payload.message
            state.loading = false
        },

        [getAllPosts.pending]: (state) => {
            state.loading = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload.posts
        },
        [getAllPosts.rejected]: (state) => {
            state.loading = false
        }
    }
})

const { reducer } = postSlice

export default reducer
// export const {
    
// } = actions
