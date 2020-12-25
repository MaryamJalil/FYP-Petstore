import { ADD_APPOINTMENT_SUCCESS, ADD_APPOINTMENT_FAILURE } from 
   '../../actions/types';
  
  const initialState = {
    create_success: null, 
    appointmentLoaded:null,
    appointment_list: JSON.parse(localStorage.getItem('appointment_list')),
    loading: false,
    error: null,
  };
  
    export default (state=initialState, action) => { 
      const { type, payload } = action;


    switch (type) {
      case ADD_APPOINTMENT_SUCCESS:
        return {
          ...state,
       
          loading: false,
          create_success:true,
        };
      case ADD_APPOINTMENT_FAILURE:
        return {
          ...state,
          loading: false,
          create_success:false

        };
    
  
      default:
        return state;
    }
  };
  
  