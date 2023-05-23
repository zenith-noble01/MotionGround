import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Untitled'
}

const previewHeaderSlice = createSlice({
    name: 'previewHeader',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setName } = previewHeaderSlice.actions;
export default previewHeaderSlice.reducer;