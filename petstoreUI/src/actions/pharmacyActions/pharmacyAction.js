import {  GET_PHARMACY_SUCCESS,GET_PHARMACY_FAIL,ADD_PHARMACY_SUCCESS,ADD_PHARMACY_FAILURE,UPLOAD_PHARMACY_SUCCESS
  ,UPLOAD_PHARMACY_FAILURE,UPDATE_PHARMACY_SUCCESS,UPDATE_PHARMACY_FAILURE,DELETE_PHARMACY_SUCCESS ,
  DELETE_PHARMACY_FAILURE} from "../types";
    import setAuthToken from '../../config/SetAuthToken';
    import {axiosInstance} from '../../config/utilities'
    import {setAlert} from '../alertAction'
    
    export const createPharmacy = (form, userId) => async dispatch => {
       
      setAuthToken(localStorage.getItem("token"))
      const config = {
        headers: {
          'Content-Type': ' application/json ' //applicat\ion/x-www.form-urlencoded
        }
      }
    
      
        
      const body = JSON.stringify(form);
      
    
    try {
      const res = await axiosInstance.post(`api/pharmacy/create/${userId}`, body, config );
      dispatch({
        type: ADD_PHARMACY_SUCCESS,
        payload: res.data
      });
       dispatch(setAlert("Product Added", 'success'));
    
    } catch (err) {
      const errors = err.response.data.errors;
    
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
    
      dispatch({
        type: ADD_PHARMACY_FAILURE,
      });
    
    }}
    export const uploadPharmacyPhoto=(file,_id)=>async dispatch => {
    
      const config = {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }
    
    try {
      const res = await axiosInstance.post(`api/pharmacy/uploadPhoto/${_id}`, file, config );
      dispatch({
        type: UPLOAD_PHARMACY_SUCCESS,
      });
       dispatch(setAlert("Product Photo Added", 'success'));
    
    } catch (err) {
      const errors = err.response.data.errors;
    
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
    
      dispatch({
        type: UPLOAD_PHARMACY_FAILURE,
      });
    }
    
    }
    
    export const getPharmacyByPharmId  = (pharmId) => async dispatch => {
       
      setAuthToken(localStorage.getItem("token"))
      const config = {
        headers: {
          'Content-Type': ' application/json ' //application/x-www.form-urlencoded
        }
      }
      
    
    try {
      const res = await axiosInstance.get(`api/pharmacy/getpharmacys/${pharmId}`, config );
      dispatch({
        type: GET_PHARMACY_SUCCESS,
        payload: res.data
      });
       dispatch(setAlert("Product Added", 'success'));
    
    } catch (err) {
      const errors = err.response.data.errors;
    
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
    
      dispatch({
        type: GET_PHARMACY_FAIL,
      });
    
    }}
    
    export const DeletePharmacy = (_id,userId) => async dispatch => {
      setAuthToken(localStorage.getItem("token"))
      if (window.confirm('Do you want to permanently delete Product? This can NOT be undone!')) {
    
      try {
    
        const res = await axiosInstance.delete(`api/pharmacy/${_id}`);
        console.log("Deleting")
        dispatch({
          type: DELETE_PHARMACY_SUCCESS,
          payload: res.data
        });
         dispatch(setAlert("Category Deleted", 'success'));
    
      } catch (err) {
        // console.log(err)
        const errors = err.response.data.errors;
        
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    
        dispatch({
          type: DELETE_PHARMACY_FAILURE,
        });
    
      }
    }
    }
    
    
      export const updatePharmacy= (pharmacy) => async dispatch => {
    
        // console.log("from Category reducer",name)
    
      setAuthToken(localStorage.getItem("token"))
        const body = pharmacy;
        
      try {
        const res = await axiosInstance.put(`api/pharmacy/updatePharmacy/${pharmacy._id}`, body);
        console.log(res)
        console.log("Updating")
    
        dispatch({
          type: UPDATE_PHARMACY_SUCCESS,
          payload:res.data
        });
        
         dispatch(setAlert("Category updated", 'success'));
    
      } catch (err) {
        console.log(err)
        const errors = err.response.data.errors;
        
        
        
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    
        dispatch({
          type: UPDATE_PHARMACY_FAILURE,
        });
    
    }
    return true
    }
    
    