import {GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL,    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,UPDATE_CATEGORY_FAILURE,UPDATE_CATEGORY_SUCCESS } from '../../actions/types';


const initialState = {
    category_list: [],
    categories: [],
    update_success: null,
    loading: false,
    error: null,
    success: null
}

export default (state=initialState, action) => { 
    const { type, payload } = action;
 
    switch (type) {
        case GET_CATEGORY_SUCCESS:
            return {
             ...state,   
             category_list:payload
            }
        case GET_CATEGORY_FAIL:
            return{
                ...state,
            }
            case DELETE_CATEGORY_SUCCESS:
                return {
                    ...state,
                    categories: state.categories.filter(
                        pet => pet._id !== action.payload._id
                    ),
                    error: null,
                    success: action.payload.successMessage
                };
            case DELETE_CATEGORY_FAILURE:
                return {
                    ...state,
                    error: payload.error,
                    success: null
                };
                case UPDATE_CATEGORY_SUCCESS:
                    return {
                        ...state,
                        update_success:true
                      
                    };
                case UPDATE_CATEGORY_FAILURE:
                    return {
                        ...state,
                        //error: action.payload.error,
                        success: null
                    };
        
        default:
            return state;
    }
}