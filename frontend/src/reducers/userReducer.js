import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});


export const { login, logout } = userSlice.actions;

export const loginUser = (username, password) => {
    return async dispatch => {
        const user = await loginService.login({ username, password });
        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        dispatch(login(user));
    }
}

export default userSlice.reducer;

