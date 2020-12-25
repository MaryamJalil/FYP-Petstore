import { ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE,DELETE_PROFILE_FAILURE,
  DELETE_PROFILE_SUCCESS,UPDATE_PROFILE_FAILURE,UPDATE_PROFILE_SUCCESS,
  GET_PROFILES_FAIL,GET_PROFILES_SUCCESS } from 
   '../../actions/types';
  
  const initialState = {
    hospitalName: "",
    // hospitalProfiles: [],
    create_success: null, 
    profilesLoaded:null,
    profiles_list: JSON.parse(localStorage.getItem('profiles_list')),
    update_success: null,
    delete_success: null,
    loading: false,
    error: null,
    newly_created_profile_id: null
  };
  
  // const hospitalProfilesReducer = (state = initialState, action) => {
    export default (state=initialState, action) => { 
      const { type, payload } = action;


    switch (type) {
      case ADD_PROFILE_SUCCESS:
        return {
          ...state,
          // hospitalName: action.payload.hospital.name,
          // hospitalProfiles: action.payload.profiles,
          loading: false,
          create_success:true,
          newly_created_profile_id:payload._id
        };
      case ADD_PROFILE_FAILURE:
        return {
          ...state,
          loading: false,
          create_success:false

        };
        case GET_PROFILES_SUCCESS:
          localStorage.setItem('profiles_list', JSON.stringify(payload))
        return {
          ...state,
          profiles_list:payload,
          profilesLoaded:true
        };
      case GET_PROFILES_FAIL:
        return {
          ...state,
          loading: false,
          profilesLoaded: false

        };
        case DELETE_PROFILE_SUCCESS:
          let profile= state.profiles_list.filter(
           prof =>prof._id !== action.payload._id
        );
          localStorage.setItem('profiles_list', JSON.stringify(profile))

          return {
              ...state,
             profiles_list:profile,
              error: null,
              delete_success: true
          };
      case DELETE_PROFILE_FAILURE:
          return {
              ...state,
              error: payload.error,
              delete_success: false
          };
          case UPDATE_PROFILE_SUCCESS:
              let succesProfiles = state.profiles_list;
              for(var i = 0; i<succesProfiles.length; i++){
                if (succesProfiles[i]._id===payload._id){
                  succesProfiles[i]=payload;
              }
            }
            
          localStorage.setItem('profiles_list',JSON.stringify( succesProfiles))
              return {
                  ...state,
                  update_success:true,
                  profiles_list: succesProfiles
              };
          case UPDATE_PROFILE_FAILURE:
              return {
                  ...state,
                  //error: action.payload.error,
                  update_success: false
              };
  
  
      default:
        return state;
    }
  };
  
  