import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    padding: {
        top: "",
        right: "",
        bottom: "",
        left: "",
    },
    margin: {
        top: "",
        right: "",
        bottom: "",
        left: "",
    },
    background: {
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