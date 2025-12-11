import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;

            localStorage.setItem('authToken', action.payload.token);
            localStorage.setItem('userId', action.payload.userId);
            localStorage.setItem('username', action.payload.username);
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;

            localStorage.removeItem('authToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
        },
        restoreUser: (state, action) => {
            state.user = action.payload;
        },
        updateUser: (state, action) => {
            if (state.user) {
                state.user = {
                    ...state.user,
                    ...action.payload,
                };
            }

            if (action.payload.username) {
                localStorage.setItem('username', action.payload.username);
            }
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, restoreUser, updateUser } =
    authSlice.actions;
export default authSlice.reducer;
