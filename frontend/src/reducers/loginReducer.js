import { createSlice } from '@reduxjs/toolkit';


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
        user: {},
        token: ''
    },
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.user = {};
            state.token = '';
        }
    }
});

export const { login, logout } = loginSlice.actions;