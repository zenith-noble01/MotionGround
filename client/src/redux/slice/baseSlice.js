import { createSlice } from "@reduxjs/toolkit";
import { RxButton, RxText } from "react-icons/rx"
import { BsImage, BsInputCursorText } from "react-icons/bs"


const initialState = {
    elements: [
        {
            name: "text",
            icon: RxText,
            draggable: true,
        },
        {
            name: "image",
            icon: BsImage,
            draggable: true,
        },
        {
            name: "button",
            icon: RxButton,
            draggable: true,
        },
        {
            name: "input",
            icon: BsInputCursorText,
            draggable: true,
        },
    ],
    preview: null,
};

const baseSlice = createSlice({
    name: "base",
    initialState,
    reducers: {
        startDrag: (state, action) => {
            state.preview = action.payload;
        },
        endDrag: (state) => {
            state.preview = null;
        },
    },
});

export const { startDrag, endDrag } = baseSlice.actions;

export default baseSlice.reducer;