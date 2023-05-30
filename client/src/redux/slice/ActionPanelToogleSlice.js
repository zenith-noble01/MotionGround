import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeComponent: "animate",
};

const slice = createSlice({
    name: "component",
    initialState,
    reducers: {
        toggleComponent: (state, action) => {
            state.activeComponent = action.payload;
        },
    },
});

export const { toggleComponent } = slice.actions;

export default slice.reducer;