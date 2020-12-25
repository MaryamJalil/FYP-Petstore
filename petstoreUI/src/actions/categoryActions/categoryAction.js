import {
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL, 
  GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE,UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE
  } from '../types';
  import setAuthToken from '../../config/SetAuthToken';
  import {axiosInstance} from '../../config/utilities'
  import {setAlert} from '../alertAction'

// import { setAuthToken } from "../auth-actions/setAuthToken";
import axios from "axios";


  export const createCategory = (name, userId) => async dispatch => {
   
    setAuthToken(localStorage.getItem("token"))
    const body = {name};
    try {
      const res = await axiosInstance.post(`api/category/create/${userId}`, body);
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
      });
       dispatch(setAlert("Category Added", 'success'));

    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: ADD_CATEGORY_FAIL,
      });
  
  }
}
//for customer and seller
  export const getAllCategories = () => async dispatch => {
 
    setAuthToken(localStorage.getItem("token"))
 
    try {
      const res = await axiosInstance.get(`api/categories/`);
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: res.data
      });
      //  dispatch(setAlert("Category Added", 'success'));
    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: GET_CATEGORY_FAIL,
      });
  
  }
}


export const DeleteCategories = (_id,userId) => async dispatch => {
  setAuthToken(localStorage.getItem("token"))
  if (window.confirm('Do you want to permanently delete Category? This can NOT be undone!')) {

  try {

    const res = await axiosInstance.delete(`api/category/${_id}`);
    console.log("Deleting")
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
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
      type: DELETE_CATEGORY_FAILURE,
    });

  }
}
}




// export const updateCategory = (name,_id, updated) => async dispatch => {
  export const updateCategories= (_id,userId,name) => async dispatch => {

    // console.log("from Category reducer",name)

  setAuthToken(localStorage.getItem("token"))

  const body = {name,_id,userId};
  try {
    const res = await axiosInstance.put(`api/category/${_id}`, body);
   
    console.log("Updating")

    dispatch({
      type: UPDATE_CATEGORY_SUCCESS,
      payload:res.data
    });
    
     dispatch(setAlert("Category updated", 'success'));

  } catch (err) {
    // console.log(err)
    const errors = err.response.data.errors;
    
    
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: UPDATE_CATEGORY_FAILURE,
    });

}
return true
}

