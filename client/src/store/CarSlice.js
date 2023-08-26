import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {carsService} from './services/planeService';

export const getCar= createAsyncThunk('GET_CAR', async (id, thunkAPI) => {
    try {
        return await carsService.getCar(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)   
    }
})

const carSlice = createSlice({
    name: 'car',
    initialState: {
        data: {},
        isLoading: false,
        isError: false,
        msg: '',

    },

    reducers: {

    },

    extraReducers: {
        [getCar.pending]: (state) => {
            state.isLoading = true;
        },

        [getCar.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.data = payload[0];

        },
        [getCar.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = payload;
            state.data = {};
        }
    }
})


export default carSlice.reducer;