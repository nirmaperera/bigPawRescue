/* eslint-disable import/no-anonymous-default-export */
import {UPDATE_PET_IMAGES, CLEAR_PET_IMAGES, DELETE_PET_IMAGE} from '../actions/petImages';

const initialUserState = {
    arrayImages:[]
}

export default (state=initialUserState, action) => {
    switch (action.type){

       case UPDATE_PET_IMAGES:
        return {
            ...state,
            arrayImages: [...state.arrayImages, action.url]
        };
       case DELETE_PET_IMAGE:
        return {
           ...state,
           arrayImages: state.arrayImages.filter(item => item !== action.url),
        }
       case CLEAR_PET_IMAGES:
        return {
            ...state,
            arrayImages: []
        }
       default:
           return state
    }
};
