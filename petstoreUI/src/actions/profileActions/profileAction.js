import { ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE,DELETE_PROFILE_FAILURE,
  DELETE_PROFILE_SUCCESS,UPDATE_PROFILE_FAILURE,UPDATE_PROFILE_SUCCESS,GET_PROFILES_FAIL,
  GET_PROFILES_SUCCESS } from "../types";
  import setAuthToken from '../../config/SetAuthToken';
  import {axiosInstance} from '../../config/utilities'
  import {setAlert} from '../alertAction'
  
  export const createProfile = (form, userId) => async dispatch => {
     
    setAuthToken(localStorage.getItem("token"))
    const config = {
      headers: {
        'Content-Type': ' application/json ' //application/x-www.form-urlencoded
      }
    }
  
      
    const body = JSON.stringify(form);
    
  
  try {
    const res = await axiosInstance.post(`api/profile/create/${userId}`, body, config );
    dispatch({
      type: ADD_PROFILE_SUCCESS,
      payload: res.data
    });
     dispatch(setAlert("Profile Added", 'success'));
  
  } catch (err) {
    const errors = err.response.data.errors;
  
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
  
    dispatch({
      type: ADD_PROFILE_FAILURE,
    });
  
  }}
  // export const uploadProfilePhoto=(file,_id)=>async dispatch => {
  
  //   const config = {
  //     headers: {
  //       'Content-Type': "multipart/form-data"
  //     }
  //   }
  
  // try {
  //   const res = await axiosInstance.post(`api/profile/uploadPhoto/${_id}`, file, config );
  //   dispatch({
  //     type: UPLOAD_PROFILE_SUCCESS,
  //   });
  //    dispatch(setAlert("Profile Photo Added", 'success'));
  
  // } catch (err) {
  //   const errors = err.response.data.errors;
  
    
  //   if (errors) {
  //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  //   }
  
  //   dispatch({
  //     type: UPLOAD_PROFILE_FAILURE,
  //   });
  // }
  
  // }
  
  export const getProfilesByhospitalId = (hospitalId) => async dispatch => {
     
    setAuthToken(localStorage.getItem("token"))
    const config = {
      headers: {
        'Content-Type': ' application/json ' //application/x-www.form-urlencoded
      }
    }
    
  
  try {
    const res = await axiosInstance.get(`api/profile/getprofiles/${hospitalId}`, config );
  
    dispatch({
      type: GET_PROFILES_SUCCESS,
      payload: res.data
    });
     dispatch(setAlert("Profile Added", 'success'));
  
  } catch (err) {
    const errors = err.response.data.errors;
  
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
  
    dispatch({
      type: GET_PROFILES_FAIL,
    });
  
  }}
  
  export const DeleteProfiles = (_id,userId) => async dispatch => {
    setAuthToken(localStorage.getItem("token"))
    if (window.confirm('Do you want to permanently delete Profile? This can NOT be undone!')) {
  
    try {
  
      const res = await axiosInstance.delete(`api/profile/${_id}`);
      console.log("Deleting")
      dispatch({
        type: DELETE_PROFILE_SUCCESS,
        payload: res.data
      });
       dispatch(setAlert("Hospital Deleted", 'success'));
  
    } catch (err) {
      // console.log(err)
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: DELETE_PROFILE_FAILURE,
      });
  
    }
  }
  }
  
  
    export const updateProfiles= (profile) => async dispatch => {
  
      // console.log("from Hospital reducer",name)
  
    setAuthToken(localStorage.getItem("token"))
      const body = profile;
      
    try {
      const res = await axiosInstance.put(`api/profile/updateProfile/${profile._id}`, body);
      console.log("Updating")
  
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload:res.data
        
      });
      // console.log(res)
  
      
       dispatch(setAlert("Hospital updated", 'success'));
  
    } catch (err) {
      console.log(err)
      const errors = err.response.data.errors;
      
      
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
      });
  
  }
  return true
  }
  
  