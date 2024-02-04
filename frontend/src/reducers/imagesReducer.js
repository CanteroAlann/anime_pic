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
        create: (state, action) => {
            state.images = state.images.concat(action.payload);
        }
    },
});

export const { setImages, create } = imagesSlice.actions;

export const getImages = () => {
    return async dispatch => {
        const images = await imageService.getAll();
        dispatch(setImages(images));

    }
}
export const uploadImage = (data) => {
    return async dispatch => {
        const newImage = await imageService.create(data);
        dispatch(create(newImage));
    }
}

export default imagesSlice.reducer;