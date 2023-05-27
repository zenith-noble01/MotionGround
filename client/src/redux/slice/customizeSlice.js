import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    background: {
        type: "color",
        color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
        },
        image: null,
        video: null,
    },
};

const customizeSlice = createSlice({
    name: "customize",
    initialState,
    reducers: {
        updatePadding: (state, action) => {
            state.padding = action.payload;
        },
        updateMargin: (state, action) => {
            state.margin = action.payload;
        },
        updateBackground: (state, action) => {
            state.background = action.payload;
        },
    },
});

export const { updatePadding, updateMargin, updateBackground } = customizeSlice.actions;

export default customizeSlice.reducer;