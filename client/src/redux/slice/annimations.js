import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    annimationType: "",
    direction: "",
    type: "",
    delay: "",
    duration: "",
    annimType: "",
};

export const animateContainerSlice = createSlice({
    name: "animateContainer",
    initialState,
    reducers: {
        setAnnimationType: (state, action) => {
            const value = action.payload;
            state.annimationType = value;
            if (value === "Text Variants") {
                state.annimType = "text";
                state.delay = "";
            } else if (value === "Zoom In") {
                state.annimType = "zoom";
                state.delay = "";
                state.duration = "";
            } else if (value === "Fade In") {
                state.annimType = "fade";
                state.direction = "";
                state.type = "";
                state.delay = "";
                state.duration = "";
            } else if (value === "Slide In") {
                state.annimType = "slide";
                state.direction = "";
                state.type = "";
                state.delay = "";
                state.duration = "";
            } else if (
                value === "") {
                state.annimType = "nothing";
                state.direction = "";
                state.type = "";
                state.delay = "";
                state.duration = "";
            } else {
                state.annimType = "";
            }
        },
        setAnnimationProperty: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        setZoom: (state, action) => {
            const { name, delay, duration } = action.payload
            const zoom = { delay, duration }

            state[name] = value


            console.log(zoom, state[name] = value);
        },
        resetAnnimations: (state) => {
            state.annimationType = "";
            state.direction = "";
            state.type = "";
            state.delay = "";
            state.duration = "";
            state.annimType = "";
        },
    },
});

export const {
    setAnnimationType,
    setAnnimationProperty,
    resetAnnimations,
    setZoom
} = animateContainerSlice.actions;

export const selectAnimateContainer = (state) => state.animateContainer;

export default animateContainerSlice.reducer;