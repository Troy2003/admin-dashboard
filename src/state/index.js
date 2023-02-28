import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        mode: 'dark',
    },

    reducers: {
        changeMode: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        }
    }
});

export const { changeMode } = globalSlice.actions;
export default globalSlice.reducer;