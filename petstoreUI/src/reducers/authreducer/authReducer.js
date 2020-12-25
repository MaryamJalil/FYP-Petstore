import { REGISTER_SUCCESS, REGISTER_FAIL,
     USER_LOADED, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, 
    LOGOUT, ACCOUNT_DELETED } from '../../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('isAuthenticated') === "true" ? true:false,
    loading: localStorage.getItem('loading') === "false" ? false : true,
    isRegistered:null,
    user:JSON.parse(localStorage.getItem('user')),
    role: localStorage.getItem('role')
}

export default (state=initialState, action) => { 
    const { type, payload } = action;
 
    switch (type) {
        case USER_LOADED:
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('user', JSON.stringify(payload));
            localStorage.setItem('role', payload.role);
            localStorage.setItem('loading', false);
            return {
             ...state,   
                isAuthenticated: true,
                loading: false,
                user:payload,
                role:payload.role
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isRegistered:true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token:payload.token,
                role:payload.role,
                isAuthenticated: true,
                loading: false,
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user:null
            }
            
        case ACCOUNT_DELETED:
            localStorage.clear();
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}