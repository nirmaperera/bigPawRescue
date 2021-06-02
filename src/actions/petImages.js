/* eslint-disable import/no-anonymous-default-export */
//types
export const UPDATE_PET_IMAGES = 'UPDATE_PET_IMAGES';
export const CLEAR_PET_IMAGES = 'CLEAR_PET_IMAGES';
export const DELETE_PET_IMAGE = 'DELETE_PET_IMAGE';

//actions
const updateArrayImages = arrayImages =>  {
    return {
        type: UPDATE_PET_IMAGES,
        url: arrayImages
    }
}

const deleteImage = arrayImages =>  {
    return {
        type: DELETE_PET_IMAGE,
        url: arrayImages
    }
}

const clearArray =() =>  {
    return {
        type: CLEAR_PET_IMAGES,
    }
}

export default{
    updateArrayImages,
    clearArray,
    deleteImage
}
