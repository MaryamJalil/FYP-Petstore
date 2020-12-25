import {
  ADD_HOSPITAL_SUCCESS,
  ADD_HOSPITAL_FAIL, 
  GET_HOSPITAL_SUCCESS, GET_HOSPITAL_FAIL,
  DELETE_HOSPITAL_SUCCESS, DELETE_HOSPITAL_FAILURE,UPDATE_HOSPITAL_SUCCESS,
  UPDATE_HOSPITAL_FAILURE
  } from '../types';
  import setAuthToken from '../../config/SetAuthToken';
  import {axiosInstance} from '../../config/utilities'
  import {setAlert} from '../alertAction'



  export const createHospital = (name, userId) => async dispatch => {
   
    setAuthToken(localStorage.getItem("token"))
    const body = {name};
    try {
      const res = await axiosInstance.post(`api/hospital/create/${userId}`, body);
      dispatch({
        type: ADD_HOSPITAL_SUCCESS,
      });
       dispatch(setAlert("Hospital Added", 'success'));

    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: ADD_HOSPITAL_FAIL,
      });
  
  }
}
//for customer and seller
  export const getAllHospitals = () => async dispatch => {
 
    setAuthToken(localStorage.getItem("token"))
 
    try {
      const res = await axiosInstance.get(`api/hospitals/`);
      dispatch({
        type: GET_HOSPITAL_SUCCESS,
        payload: res.data
      });
      //  dispatch(setAlert("Hospital Added", 'success'));
    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: GET_HOSPITAL_FAIL,
      });
  
  }
}


export const DeleteHospitals = (_id,userId) => async dispatch => {
  setAuthToken(localStorage.getItem("token"))
  if (window.confirm('Do you want to permanently delete Hospital? This can NOT be undone!')) {

  try {

    const res = await axiosInstance.delete(`api/hospital/${_id}`);
    console.log("Deleting")
    dispatch({
      type: DELETE_HOSPITAL_SUCCESS,
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
      type: DELETE_HOSPITAL_FAILURE,
    });

  }
}
}




// export const updateHospital = (name,_id, updated) => async dispatch => {
  export const updateHospitals= (_id,userId,name) => async dispatch => {

    // console.log("from Hospital reducer",name)

  setAuthToken(localStorage.getItem("token"))

  const body = {name,_id,userId};
  try {
    const res = await axiosInstance.put(`api/hospital/${_id}`, body);
   
    console.log("Updating")

    dispatch({
      type: UPDATE_HOSPITAL_SUCCESS,
      payload:res.data
    });
    
     dispatch(setAlert("Hospital updated", 'success'));

  } catch (err) {
    // console.log(err)
    const errors = err.response.data.errors;
    
    
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: UPDATE_HOSPITAL_FAILURE,
    });

}
return true
}

