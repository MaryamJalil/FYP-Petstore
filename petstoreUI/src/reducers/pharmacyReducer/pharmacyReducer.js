import {
  GET_PHARMACY_SUCCESS,GET_PHARMACY_FAIL,ADD_PHARMACY_SUCCESS,ADD_PHARMACY_FAILURE,UPLOAD_PHARMACY_SUCCESS
  ,UPLOAD_PHARMACY_FAILURE,UPDATE_PHARMACY_SUCCESS,UPDATE_PHARMACY_FAILURE,DELETE_PHARMACY_SUCCESS ,
  DELETE_PHARMACY_FAILURE } from 
   '../../actions/types';
  
   const initialState = {
    pharmName: "",
    // pharmPharmacy: [],
    create_success: null, 
    pharmacyLoaded:null,
    pharmacy_list: JSON.parse(localStorage.getItem('pharmacy_list')),
    update_success: null,
    delete_success: null,
    loading: false,
    error: null,
    newly_created_pharmacy_id: null
  };
  
  // const pharmProductsReducer = (state = initialState, action) => {
    export default (state=initialState, action) => { 
      const { type, payload } = action;


    switch (type) {
      case ADD_PHARMACY_SUCCESS:
        return {
          ...state,
          // pharmName: action.payload.pharm.name,
          // pharmProducts: action.payload.pharmacy,
          loading: false,
          create_success:true,
          newly_created_pharmacy_id:payload._id
        };
      case ADD_PHARMACY_FAILURE:
        return {
          ...state,
          loading: false,
          create_success:false

        };
        case GET_PHARMACY_SUCCESS:
          localStorage.setItem('pharmacy_list', JSON.stringify(payload))
        return {
          ...state,
          pharmacy_list:payload,
          pharmacyLoaded:true
        };
      case GET_PHARMACY_FAIL:
        return {
          ...state,
          loading: false,
          pharmacyLoaded: false

        };
        case DELETE_PHARMACY_SUCCESS:
          let pharmacy= state.pharmacy_list.filter(
            prod => prod._id !== action.payload._id
        );
          localStorage.setItem('pharmacy_list', JSON.stringify(pharmacy))

          return {
              ...state,
             pharmacy_list:pharmacy,
              error: null,
              delete_success: true
          };
      case DELETE_PHARMACY_SUCCESS:
          return {
              ...state,
              error: payload.error,
              delete_success: false
          };
          case UPDATE_PHARMACY_SUCCESS:
              let succesPharmacy = state.pharmacy_list;
              for(var i = 0; i<succesPharmacy.length; i++){
                if (succesPharmacy[i]._id===payload._id){
                  succesPharmacy[i]=payload;
              }
            }
            
          localStorage.setItem('pharmacy_list',JSON.stringify( succesPharmacy))
              return {
                  ...state,
                  update_success:true,
                  pharmacy_list: succesPharmacy
              };
          case UPDATE_PHARMACY_FAILURE:
              return {
                  ...state,
                  //error: action.payload.error,
                  update_success: false
              };
  
  
      default:
        return state;
    }
  };
  
  // export default pharmPharmacyReducer;
  