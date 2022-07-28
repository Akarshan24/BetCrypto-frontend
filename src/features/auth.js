import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            isLoggedIn: false,
            isEmailVerified: false,
            codeSentMessage: '',
            verifyEmailWindowMessage: '',
        }
    },
    reducers: {
        emailVerified: (state) => {
            state.value.isEmailVerified = true;
        },
        setCodeSentMessage: (state, action) => {
            state.value.codeSentMessage = action.payload.data;
        },
        setVerifyEmailWindowMessage: (state, action) => {
            state.value.verifyEmailWindowMessage = action.payload.data;
        },
        userLoggedIn: (state) => {
            state.value.isLoggedIn = true;
            state.value.isEmailVerified = true;
            state.value.isVerificationCodeSent = true;
        },
        userLoggedOut: (state) => {
            state.value.isLoggedIn = false;
            state.value.isEmailVerified = false;
            state.value.isVerificationCodeSent = false;
        }
    }
});
export const { userLoggedOut, emailVerified, setCodeSentMessage, setVerifyEmailWindowMessage, userLoggedIn } = authSlice.actions;
export default authSlice.reducer;