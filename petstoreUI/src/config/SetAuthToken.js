import {axiosInstance}  from './utilities'
const setAuthToken = token => {
  if (token) {
    // axios.defaults.headers.common['x-auth-token'] = token;
    axiosInstance.defaults.headers.common['x-auth-token'] = token;
  } else {
    // delete axios.defaults.headers.common['x-auth-token'];
    delete axiosInstance.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
