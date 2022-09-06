import { createSlice } from "@reduxjs/toolkit";

export const tournamentSlice = createSlice({
    name: 'tournament',
    initialState: [],
    reducers: {
        addTournament: (state, action) => {
            state.push(action.payload);
        },
        findTournament: (state, action) => {
            const key = action.payload.key;
            const value = action.payload.value;
            return Object.keys(state).find(key => state[key] === value);
        }
    }
});
export const { addTournament, findTournament } = tournamentSlice.actions;
export default tournamentSlice.reducer;

/*
{
    name: "...",
    id: "...",
    matchList: [
    {..},{..},...,{..}
    ]
}
*/