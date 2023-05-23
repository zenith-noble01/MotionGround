import { configureStore } from "@reduxjs/toolkit";
import animateContainerReducer from "./slice/annimations";
import headerName from "./slice/headerName";

export const store = configureStore({
    reducer: {
        animateContainer: animateContainerReducer,
        headerName: headerName
    },
});
