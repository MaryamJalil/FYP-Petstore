// export const API = process.env.REACT_APP_API_URL;

import axios from 'axios';

  // export default uiInstance;
  export const BackendInstance = axios.create({
    baseURL: 'http://localhost:5000/api'

  });
