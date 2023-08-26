import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'Favorite',
    initialState: {
        favs: [],
        length: 0,
    },

    reducers: {
        addToFavorite(state, {payload}) {
            if(!state.favs.some(el => el._id === payload._id)) {
                payload.inFavorite = true;
                state.favs.push(payload);
                ++state.length;
            }
        },

        removeFromFavorite(state, {payload}) {
            if(state.favs.some(el=>el._id === payload)) {
                const toChange = state.favs.find(el=>el._id === payload);
                toChange.inFavorite = false;
                state.favs = state.favs.filter(el => el._id !== payload);
                --state.length;
            }
        }
    }
})

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;