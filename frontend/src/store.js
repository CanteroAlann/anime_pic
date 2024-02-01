import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './reducers/imagesReducer'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'



const store = configureStore({
    reducer: {
        images: imagesReducer,
        user: userReducer,
        login: loginReducer,
    },
})

export default store