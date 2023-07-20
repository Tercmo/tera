import { createSlice } from "@reduxjs/toolkit";

const celSlice = createSlice({
    name: "cel",
    initialState: { celebritiesList: [] },
    reducers: {
        setCel: (state, action) => {
            state.celebritiesList = [...state.celebritiesList, action.payload];
        },
        removeCel: (state, action) => {
            const celId = action.payload;
            state.celebritiesList = state.celebritiesList.filter(cel => cel.id !== celId);


        }
    }
})
export const { setCel, removeCel } = celSlice.actions;
export default celSlice.reducer;