import {GET_HOSPITAL_SUCCESS, GET_HOSPITAL_FAIL,    DELETE_HOSPITAL_SUCCESS,
    DELETE_HOSPITAL_FAILURE,UPDATE_HOSPITAL_FAILURE,UPDATE_HOSPITAL_SUCCESS } from '../../actions/types';


    const initialState = {
        hospital_list: [],
        hospitals: [],
        update_success: null,
        loading: false,
        error: null,
        success: null
    }
    
    export default (state=initialState, action) => { 
        const { type, payload } = action;
     
        switch (type) {
            case GET_HOSPITAL_SUCCESS:
                return {
                 ...state,   
                 hospital_list:payload
                }
            case GET_HOSPITAL_FAIL:
                return{
                    ...state,
                }
                case DELETE_HOSPITAL_SUCCESS:
                    return {
                        ...state,
                        hospitals: state.hospitals.filter(
                            hosp => hosp._id !== action.payload._id
                        ),
                        error: null,
                        success: action.payload.successMessage
                    };
                case DELETE_HOSPITAL_FAILURE:
                    return {
                        ...state,
                        error: payload.error,
                        success: null
                    };
                    case UPDATE_HOSPITAL_SUCCESS:
                        return {
                            ...state,
                            update_success:true
                          
                        };
                    case UPDATE_HOSPITAL_FAILURE:
                        return {
                            ...state,
                            //error: action.payload.error,
                            success: null
                        };
            
            default:
                return state;
        }
    }