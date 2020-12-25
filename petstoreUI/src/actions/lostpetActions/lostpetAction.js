import { ADD_LOSTPET_SUCCESS, ADD_LOSTPET_FAIL,DELETE_LOSTPET_FAILURE,
DELETE_LOSTPET_SUCCESS,UPDATE_LOSTPET_FAILURE,UPDATE_LOSTPET_SUCCESS,GET_LOSTPET_FAIL,
GET_LOSTPET_SUCCESS ,UPLOAD_LOSTPET_SUCCESS,UPLOAD_LOSTPET_FAILURE} from "../types";
import setAuthToken from '../../config/SetAuthToken';
import {axiosInstance} from '../../config/utilities'
import {setAlert} from '../alertAction'

export const createPetlost= (form, userId) => async dispatch => {
   
  setAuthToken(localStorage.getItem("token"))
  const config = {
    headers: {
      'Content-Type': ' application/json ' //application/x-www.form-urlencoded
    }
  }

    
  const body = JSON.stringify(form);
  

try {
  const res = await axiosInstance.post(`api/lostpet/create/${userId}`, body, config );
  dispatch({
    type: ADD_LOSTPET_SUCCESS,
    payload: res.data
  });
   dispatch(setAlert("Petlost Added", 'success'));

} catch (err) {
  const errors = err.response.data.errors;

  
  if (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  }

  dispatch({
    type: ADD_LOSTPET_FAIL,
  });

}}

export const getLostpet = (userId) => async dispatch => {
 
  setAuthToken(localStorage.getItem("token"))
  const config = {
    headers: {
      'Content-Type': ' application/json ' //application/x-www.form-urlencoded
    }
  }
  
  try {
    const res = await axiosInstance.get(`api/lostpet/list`,config);
    dispatch({
      type: GET_LOSTPET_SUCCESS,
      payload: res.data
    });
    //  dispatch(setAlert("Category Added", 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: GET_LOSTPET_FAIL,
    });

}
}
export const uploadLostpetPhoto=(file,_id)=>async dispatch => {

  const config = {
    headers: {
      'Content-Type': "multipart/form-data"
    }
  }

try {

  const res = await axiosInstance.post(`api/lostpet/uploadPhoto/${_id}`, file, config );
  dispatch({
    type: UPLOAD_LOSTPET_SUCCESS,
  });
   dispatch(setAlert("PetlostPhoto Added", 'success'));

} catch (err) {
  const errors = err.response.data.errors;

  
  if (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  }

  dispatch({
    type: UPLOAD_LOSTPET_FAILURE,
  });
}

}


export const DeleteLostpet = (_id,userId) => async dispatch => {
  setAuthToken(localStorage.getItem("token"))
  if (window.confirm('Do you want to permanently delete information? This can NOT be undone!')) {

  try {

    const res = await axiosInstance.delete(`api/lostpet/${_id}`);
    console.log("Deleting")
    dispatch({
      type: DELETE_LOSTPET_SUCCESS,
      payload: res.data
    });
     dispatch(setAlert("Pet Lost information deleted", 'success'));

  } catch (err) {
    // console.log(err)
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: DELETE_LOSTPET_FAILURE,
    });

  }
}
}


  export const updateLostpet= (lostpet) => async dispatch => {

    // console.log("from Category reducer",name)

  setAuthToken(localStorage.getItem("token"))
    const body = lostpet;
    
  try {
    const res = await axiosInstance.put(`api/lostpet/updateLostpet/${lostpet._id}`, body);
    console.log("Updating")

    dispatch({
      type: UPDATE_LOSTPET_SUCCESS,
      payload:res.data
      
    });
    // console.log(res)

    
    //  dispatch(setAlert("Category updated", 'success'));

  } catch (err) {
    console.log(err)
    const errors = err.response.data.errors;
    
    
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: UPDATE_LOSTPET_FAILURE,
    });

}
return true
}

