import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: {
        r: 222,
        g: 222,
        b: 222,
        a: 1,
    },
    hex: "dedede",
};

const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColor: (state, action) => {
            const { r, g, b, a } = action.payload;
            const hex = rgbToHex(r, g, b);
            state.color.r = r;
            state.color.g = g;
            state.color.b = b;
            state.color.a = a;
            state.hex = hex;
        },

    },
});

export const { setColor, updateHex, } = ColorSlice.actions;

export default ColorSlice.reducer;

export function rgbToHex(r, g, b) {
    const hex = ((r << 16) + (g << 8) + b).toString(16);
    return hex.padStart(6, "0");
}