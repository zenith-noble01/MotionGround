import { configureStore } from "@reduxjs/toolkit";
import animateContainerReducer from "./slice/annimations";
import headerName from "./slice/headerName";
import customizeSlice from "./slice/customizeSlice";
import ActionPanelToogleSlice from "./slice/ActionPanelToogleSlice";
import ColorSlice from "./slice/ColorSlice";
import TextColorSlice from "./slice/TextColorSlice";

export const store = configureStore({
    reducer: {
        animateContainer: animateContainerReducer,
        headerName: headerName,
        customize: customizeSlice,
        actionPanel: ActionPanelToogleSlice,
        bgColor: ColorSlice,
        textColor: TextColorSlice
    },
});
