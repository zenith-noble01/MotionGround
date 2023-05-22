import { configureStore } from "@reduxjs/toolkit";
import animateContainerReducer from "./slice/annimations";

export const store = configureStore({
    reducer: {
        animateContainer: animateContainerReducer,
    },
});
