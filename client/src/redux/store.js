import { configureStore } from "@reduxjs/toolkit";
import animateContainerReducer from "./slice/annimations";
import headerName from "./slice/headerName";
import customizeSlice from "./slice/customizeSlice";

export const store = configureStore({
    reducer: {
        animateContainer: animateContainerReducer,
        headerName: headerName,
        customize: customizeSlice
    },
});
