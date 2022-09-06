import { createSlice } from "@reduxjs/toolkit";

export const footballSlice = createSlice({
    name: 'football',
    initialState: [],
    reducers: {
        addMatch: (state, action) => {
            state.push(action.payload);
        },
        findMatch: (state, action) => {
            const key = action.payload.key;
            const value = action.payload.value;
            return Object.keys(state).find(key => state[key] === value);
        }
    }
});
export const { addMatch, findMatch } = footballSlice.actions;
export default footballSlice.reducer;

/*
{
    name: "...",
    id: "...",
    matchList: [
    {..},{..},...,{..}
    ]
}
*/