import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE,DELETE_PRODUCT_FAILURE,
DELETE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE,UPDATE_PRODUCT_SUCCESS,GET_PRODUCTS_FAIL,
GET_PRODUCTS_SUCCESS ,UPLOAD_PRODUCT_SUCCESS,UPLOAD_PRODUCT_FAILURE} from "../types";
import setAuthToken from '../../config/SetAuthToken';
import {axiosInstance} from '../../config/utilities'
import {setAlert} from '../alertAction'

export const createProduct = (form, userId) => async dispatch => {
   
  setAuthToken(localStorage.getItem("token"))
  const config = {
    headers: {
      'Content-Type': ' application/json ' //application/x-www.form-urlencoded
    }
  }

    
  const body = JSON.stringify(form);
  

try {
  const res = await axiosInstance.post(`api/product/create/${userId}`, body, config );
  dispatch({
    type: ADD_PRODUCT_SUCCESS,
    payload: res.data
  });
   dispatch(setAlert("Product Added", 'success'));

} catch (err) {
  const errors = err.response.data.errors;

  
  if (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  }

  dispatch({
    type: ADD_PRODUCT_FAILURE,
  });

}}
export const uploadProductPhoto=(file,_id)=>async dispatch => {

  const config = {
    headers: {
      'Content-Type': "multipart/form-data"
    }
  }

try {
  const res = await axiosInstance.post(`api/product/uploadPhoto/${_id}`, file, config );
  dispatch({
    type: UPLOAD_PRODUCT_SUCCESS,
  });
   dispatch(setAlert("Product Photo Added", 'success'));

} catch (err) {
  const errors = err.response.data.errors;

  
  if (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  }

  dispatch({
    type: UPLOAD_PRODUCT_FAILURE,
  });
}

}

export const getProductsBycategoryId = (categoryId) => async dispatch => {
   
  setAuthToken(localStorage.getItem("token"))
  const config = {
    headers: {
      'Content-Type': ' application/json ' //application/x-www.form-urlencoded
    }
  }
  

try {
  // const res = await axiosInstance.post(`api/product/getproducts/${categoryId}`, config );
  const res = await axiosInstance.get(`api/product/getproducts/${categoryId}`, config );

  dispatch({
    type: GET_PRODUCTS_SUCCESS,
    payload: res.data
  });
   dispatch(setAlert("Product Added", 'success'));

} catch (err) {
  const errors = err.response.data.errors;

  
  if (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  }

  dispatch({
    type: GET_PRODUCTS_FAIL,
  });

}}

export const DeleteProducts = (_id,userId) => async dispatch => {
  setAuthToken(localStorage.getItem("token"))
  if (window.confirm('Do you want to permanently delete Product? This can NOT be undone!')) {

  try {

    const res = await axiosInstance.delete(`api/product/${_id}`);
    console.log("Deleting")
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
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
      type: DELETE_PRODUCT_FAILURE,
    });

  }
}
}


  export const updateProducts= (product) => async dispatch => {

    // console.log("from Category reducer",name)

  setAuthToken(localStorage.getItem("token"))
    const body = product;
    
  try {
    const res = await axiosInstance.put(`api/product/updateProduct/${product._id}`, body);
    console.log("Updating")

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload:res.data
      
    });
    // console.log(res)

    
     dispatch(setAlert("Category updated", 'success'));

  } catch (err) {
    console.log(err)
    const errors = err.response.data.errors;
    
    
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
    });

}
return true
}

