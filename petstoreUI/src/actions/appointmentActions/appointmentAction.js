import { ADD_APPOINTMENT_SUCCESS, ADD_APPOINTMENT_FAILURE} from "../types";
import setAuthToken from '../../config/SetAuthToken';
import {axiosInstance} from '../../config/utilities'
import {setAlert} from '../alertAction'

export const createAppointment = (form, userId) => async dispatch => {
   
  setAuthToken(localStorage.getItem("token"))
  const config = {
    headers: {
      'Content-Type': ' application/json ' //application/x-www.form-urlencoded
    }
  }

    
  const body = JSON.stringify(form);
  

try {
  const res = await axiosInstance.post(`api/appointment/create/${userId}`, body, config );
  dispatch({
    type: ADD_APPOINTMENT_SUCCESS,
    payload: res.data
  });
   dispatch(setAlert("Appointment Added", 'success'));

} catch (err) {
  const errors = err.response.data.errors;

  
  if (errors) {
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
  }

  dispatch({
    type: ADD_APPOINTMENT_FAILURE,
  });

}}
