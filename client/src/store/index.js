import {configureStore} from '@reduxjs/toolkit';
import carsSlice from './CarsSlice'
import FavoriteSlice from './FavoriteSlice';
import FilterSlice from './FilterSlice';
import carSlice from './CarSlice';

export const store = configureStore({
    reducer: {
        carsSlice,
        carSlice,
        FavoriteSlice,
        FilterSlice,
    }
})