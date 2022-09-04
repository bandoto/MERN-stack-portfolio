import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    works: [],
    loading: false,
    status: null
}

export const createWork = createAsyncThunk(
    'work/createWork',
    async (params) => {
        try {
            const { data } = await axios.post('/works', params)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const getAllWorks = createAsyncThunk(
    'work/getAllWorks',
    async () => {
        try {
            const { data } = await axios.get('/works')
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers: {},
    extraReducers: {
        [createWork.pending]: (state) => {
            state.loading = true
            state.status = null
        },
        [createWork.fulfilled]: (state, action) => {
            state.loading = false
            state.status = action.payload.message
            state.works.push(action.payload)
        },
        [createWork.rejected]: (state, action) => {
            state.status = action.payload.message
            state.loading = false
        },

        [getAllWorks.pending]: (state) => {
            state.loading = true
        },
        [getAllWorks.fulfilled]: (state, action) => {
            state.loading = false
            state.works = action.payload.works
        },
        [getAllWorks.rejected]: (state) => {
            state.loading = false
        }
    }
})

const { reducer } = workSlice

export default reducer
// export const {
    
// } = actions
