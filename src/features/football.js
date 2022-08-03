import { createSlice } from "@reduxjs/toolkit";

export const footballSlice = createSlice({
    name: 'football',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        find: (state, action) => {
            const key = action.payload.key;
            const value = action.payload.value;
            return Object.keys(state).find(key => state[key] === value);
        }
    }
});
export const { add, find } = footballSlice.actions;
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