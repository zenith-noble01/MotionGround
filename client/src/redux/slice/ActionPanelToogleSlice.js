import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animate: {
        active: false,
        data: {},
    },
    customize: {
        active: false,
        data: {},
    },
};

const slice = createSlice({
    name: "component",
    initialState,
    reducers: {
        toggleComponent: (state, action) => {
            const { component, data } = action.payload;
            state[component] = {
                active: !state[component].active,
                data,
            };
        },
    },
});

export const { toggleComponent } = slice.actions;

export default slice.reducer;