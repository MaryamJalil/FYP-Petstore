import { ADD_LOSTPET_SUCCESS, ADD_LOSTPET_FAIL,DELETE_LOSTPET_FAILURE,
  DELETE_LOSTPET_SUCCESS,UPDATE_LOSTPET_FAILURE,UPDATE_LOSTPET_SUCCESS,
  GET_LOSTPET_FAIL,GET_LOSTPET_SUCCESS } from 
   '../../actions/types';
  
  const initialState = {
    create_success: null, 
    lostpetLoaded:null,
    // lostpet_list: JSON.parse(localStorage.getItem('lostpet_list')),
    lostpet_list:[],
    lostpet:null,
    update_success: null,
    delete_success: null,
    loading: false,
    error: null,
    newly_created_lostpet_id: null
  };
  
    export default (state=initialState, action) => { 
      const { type, payload } = action;


    switch (type) {
      case ADD_LOSTPET_SUCCESS:
        return {
          ...state,
        
          loading: false,
          create_success:true,
          newly_created_lostpet_id:payload._id
        };
      case ADD_LOSTPET_FAIL:
        return {
          ...state,
          loading: false,
          create_success:false

        };
        case GET_LOSTPET_SUCCESS:
          localStorage.setItem('lostpet_list', JSON.stringify(payload))
        return {
          ...state,
        lostpet_list:payload,
          lostpetLoaded:true
        };
      case GET_LOSTPET_FAIL:
        return {
          ...state,
          loading: false,
          lostpetLoaded: false

        };
        case DELETE_LOSTPET_SUCCESS:
          let lostpet= state.lostpet_list.filter(
            lost => lost._id !== action.payload._id
        );
          localStorage.setItem('lostpet_list', JSON.stringify(lostpet))

          return {
              ...state,
             lostpet_list:lostpet,
              error: null,
              delete_success: true
          };
      case DELETE_LOSTPET_FAILURE:
          return {
              ...state,
              error: payload.error,
              delete_success: false
          };
          case UPDATE_LOSTPET_SUCCESS:
              let succesLostpet = state.lostpet_list;
              for(var i = 0; i<succesLostpet.length; i++){
                if (succesLostpet[i]._id===payload._id){
                  succesLostpet[i]=payload;
              }
            }
            
          localStorage.setItem('lostpet_list',JSON.stringify( succesLostpet))
              return {
                  ...state,
                  update_success:true,
                  lostpet_list: succesLostpet
              };
          case UPDATE_LOSTPET_FAILURE:
              return {
                  ...state,
                  //error: action.payload.error,
                  update_success: false
              };
  
  
      default:
        return state;
    }
  };
  
  // export default categoryLostpetReducer;
  