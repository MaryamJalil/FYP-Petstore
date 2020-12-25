import {
    ADD_PHARM_SUCCESS,
    ADD_PHARM_FAIL, 
    GET_PHARM_SUCCESS, GET_PHARM_FAIL,
    DELETE_PHARM_SUCCESS, DELETE_PHARM_FAILURE,UPDATE_PHARM_SUCCESS,
    UPDATE_PHARM_FAILURE
    } from '../types';
    import setAuthToken from '../../config/SetAuthToken';
    import {axiosInstance} from '../../config/utilities'
    import {setAlert} from '../alertAction'
  
  // import { setAuthToken } from "../auth-actions/setAuthToken";
  import axios from "axios";
  
  
    export const createPharm = (name, userId) => async dispatch => {
     
      setAuthToken(localStorage.getItem("token"))
      const body = {name};
      try {
        const res = await axiosInstance.post(`api/pharm/create/${userId}`, body);
        dispatch({
          type: ADD_PHARM_SUCCESS,
        });
         dispatch(setAlert("Category of Pharmacy Added", 'success'));
  
      } catch (err) {
        const errors = err.response.data.errors;
        
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    
        dispatch({
          type: ADD_PHARM_FAIL,
        });
    
    }
  }
  
    export const getAllPharms= () => async dispatch => {
   
      setAuthToken(localStorage.getItem("token"))
   
      try {
        const res = await axiosInstance.get(`api/pharms/`);
        dispatch({
          type: GET_PHARM_SUCCESS,
          payload: res.data
        });
         dispatch(setAlert("Category of Pharmacy Added", 'success'));
      } catch (err) {
        const errors = err.response.data.errors;
        
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    
        dispatch({
          type: GET_PHARM_FAIL,
        });
    
    }
  }
  
  
  export const DeletePharms= (_id,userId) => async dispatch => {
    setAuthToken(localStorage.getItem("token"))
    if (window.confirm('Do you want to permanently delete Category? This can NOT be undone!')) {
  
    try {
  
      const res = await axiosInstance.delete(`api/pharm/${_id}`);
      console.log("Deleting")
      dispatch({
        type: DELETE_PHARM_SUCCESS,
        payload: res.data
      });
       dispatch(setAlert("Category of pharmacy  Deleted", 'success'));
  
    } catch (err) {
      // console.log(err)
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: DELETE_PHARM_FAILURE,
      });
  
    }
  }
  }
  
  
  
  
  // export const updateCategory = (name,_id, updated) => async dispatch => {
    export const updatePharms= (_id,userId,name) => async dispatch => {
  
      // console.log("from Category reducer",name)
  
    setAuthToken(localStorage.getItem("token"))
  
    const body = {name,_id,userId};
    try {
      const res = await axiosInstance.put(`api/pharm/${_id}`, body);
     
      console.log("Updating")
  
      dispatch({
        type: UPDATE_PHARM_SUCCESS,
        payload:res.data
      });
      console.log(res.data)
      
       dispatch(setAlert("Category of Pharmacy updated", 'success'));
  
    } catch (err) {
      // console.log(err)
      const errors = err.response.data.errors;
      
      
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: UPDATE_PHARM_FAILURE,
      });
  
  }
  return true
  }
  
  