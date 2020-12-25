import { combineReducers } from 'redux';
import authReducer from './authreducer/authReducer'
import alertReducer from './alertReducer'
import categoryReducer from './categoryreducer/categoryReducer';
import productReducer from './productreducer/productReducer';
import pharmReducer from './pharmReducer/pharmReducer';
import pharmacyReducer from './pharmacyReducer/pharmacyReducer';
import hospitalReducer from './hospitalReducer/hospitalReducer';
import profileReducer from './profileReducer/profileReducer';
import lostpetReducer from './lostpetReducer/lostpetReducer'
import appointmentReducer from './appointmentreducer/appointmentReducer'

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  category: categoryReducer,
  product: productReducer,
  pharm: pharmReducer,
  pharmacy:pharmacyReducer,
  hospital: hospitalReducer,
  profile:profileReducer,
  lostpet:lostpetReducer,
  appointment:appointmentReducer
});