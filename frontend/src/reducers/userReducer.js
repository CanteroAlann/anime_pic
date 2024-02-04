import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';
import imageService from '../services/images';


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
        imageService.setToken(user.token);
        dispatch(login(user));
    }
}

export const logoutUser = () => {
    return async dispatch => {
        window.localStorage.removeItem('loggedUser');
        dispatch(logout());
    }
}

export const loadUser = () => {
    return async dispatch => {
        const loggedUser = window.localStorage.getItem('loggedUser');
        if (loggedUser) {
            const user = JSON.parse(loggedUser);
            imageService.setToken(user.token);
            dispatch(login(user));
        }
    }
}

export default userSlice.reducer;

