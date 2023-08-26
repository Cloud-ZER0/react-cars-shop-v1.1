import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { carsService } from "./services/planeService";

export const getCars = createAsyncThunk('GET_CARS', async (_, thunkAPI) => {
    try {
        
        return await carsService.getCars();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        carsList: [],
        isError: false,
        isLoading: false,
        msg: '',
    },
    reducers: {

    },

    extraReducers: {
        [getCars.pending]: (state) => {
            state.isLoading = true;
        },

        [getCars.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.carsList = payload;

        },
        [getCars.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = payload;
            state.carsList = [];
        }
    }

})

export default carsSlice.reducer;