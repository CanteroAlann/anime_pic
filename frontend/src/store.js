import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './reducers/imagesReducer'
import userReducer from './reducers/userReducer'



const store = configureStore({
    reducer: {
        images: imagesReducer,
        user: userReducer,
    },
})

export default store