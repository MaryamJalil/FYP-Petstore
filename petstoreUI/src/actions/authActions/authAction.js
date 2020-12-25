import {
    REGISTER_SUCCESS, REGISTER_FAIL,
     USER_LOADED, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, 
    LOGOUT, ACCOUNT_DELETED
  } from '../types';
  import setAuthToken from '../../config/SetAuthToken';
  import {axiosInstance} from '../../config/utilities'
  import {setAlert} from '../alertAction'
  

  export const register = (formData) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': ' application/json'
      }
    }
    const body = JSON.stringify(formData);
    try {
      const res = await axiosInstance.post('auth/register', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload:res.data

      
      });
      dispatch(loadUser());
      console.log(res.data);
    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: REGISTER_FAIL,
      });
  
  }
  }
  
  export const login = ({ email, password, role }) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': ' application/json'
      }
    }
    const body = JSON.stringify({ email, password, role });
    try {
      const res = await axiosInstance.post('auth/login', body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: LOGIN_FAIL,
      });
  
  }
  }

  // Load User
  export const loadUser = () => async dispatch => {
      console.log(localStorage.token)
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
      const res = await axiosInstance.get('authorization/');
  
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
  
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
   
    }
  };
  

  export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
  }