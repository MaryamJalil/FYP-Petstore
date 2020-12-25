import {GET_PHARM_SUCCESS, GET_PHARM_FAIL, DELETE_PHARM_SUCCESS,
    DELETE_PHARM_FAILURE,UPDATE_PHARM_FAILURE,UPDATE_PHARM_SUCCESS } from '../../actions/types';


const initialState = {
    pharm_list: [],
    pharms: [],
    update_success: null,
    loading: false,
    error: null,
    success: null
}

export default (state=initialState, action) => { 
    const { type, payload } = action;
 
    switch (type) {
        case GET_PHARM_SUCCESS:
            return {
             ...state,   
             pharm_list:payload
            }
        case GET_PHARM_FAIL:
            return{
                ...state,
            }
            case DELETE_PHARM_SUCCESS:
                return {
                    ...state,
                    pharms: state.pharms.filter(
                        pharmacy => pharmacy._id !== action.payload._id
                    ),
                    error: null,
                    success: action.payload.successMessage
                };
            case DELETE_PHARM_FAILURE:
                return {
                    ...state,
                    error: payload.error,
                    success: null
                };
                case UPDATE_PHARM_SUCCESS:
                    return {
                        ...state,
                        update_success:true
                      
                    };
                case UPDATE_PHARM_FAILURE:
                    return {
                        ...state,
                        //error: action.payload.error,
                        success: null
                    };
        
        default:
            return state;
    }
}