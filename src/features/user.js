import { createSlice } from '@reduxjs/toolkit';
import { OK } from '../constants';
import { getWalletBalancesService } from '../service/tokenService';
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
        }
    },
    reducers: {
        logInUser: (state, action) => {
            state.value = action.payload;
        },
        logOutUser: (state) => {
            state.value = {}
        }
    }
});
export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;