import { createSlice } from "@reduxjs/toolkit";
import imageService from "../services/images";


export const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        images: [],
    },
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;

        },


    },
});

export const { setImages } = imagesSlice.actions;

export const getImages = () => {
    return async dispatch => {
        const images = await imageService.getAll();
        dispatch(setImages(images));

    }
}

export default imagesSlice.reducer;