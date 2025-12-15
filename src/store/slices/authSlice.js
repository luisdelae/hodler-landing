import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    profileLoading: false,
    error: null,
    success: null,
    isInitialized: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.success = null;

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
            state.success = 'Logged out sucessfully';

            localStorage.removeItem('authToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
        },
        restoreUser: (state, action) => {
            state.user = action.payload;
            state.isInitialized = true;
        },
        initializeAuth: (state) => {
            state.isInitialized = true;
        },
        updateUserStart: (state) => {
            state.profileLoading = true;
        },
        updateUserSuccess: (state, action) => {
            state.profileLoading = false;
            state.success = 'Profile updated successfully';

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
        updateUserFailure: (state, action) => {
            state.profileLoading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => action.type.endsWith('/start'),
            (state) => {
                state.error = null;
                state.success = null;
            }
        );
        builder.addMatcher(
            (action) => action.type.endsWith('/success'),
            (state) => {
                state.error = null;
            }
        );
        builder.addMatcher(
            (action) => action.type.endsWith('/failure'),
            (state) => {
                state.success = null;
            }
        );
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    restoreUser,
    initializeAuth,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
