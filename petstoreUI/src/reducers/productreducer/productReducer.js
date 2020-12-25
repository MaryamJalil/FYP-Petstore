import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE,DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE,UPDATE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS } from 
   '../../actions/types';
  
  const initialState = {
    categoryName: "",
    // categoryProducts: [],
    create_success: null, 
    productsLoaded:null,
    products_list: JSON.parse(localStorage.getItem('products_list')),
    update_success: null,
    delete_success: null,
    loading: false,
    error: null,
    newly_created_product_id: null
  };
  
  // const categoryProductsReducer = (state = initialState, action) => {
    export default (state=initialState, action) => { 
      const { type, payload } = action;


    switch (type) {
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          // categoryName: action.payload.category.name,
          // categoryProducts: action.payload.products,
          loading: false,
          create_success:true,
          newly_created_product_id:payload._id
        };
      case ADD_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          create_success:false

        };
        case GET_PRODUCTS_SUCCESS:
          localStorage.setItem('products_list', JSON.stringify(payload))
        return {
          ...state,
          products_list:payload,
          productsLoaded:true
        };
      case GET_PRODUCTS_FAIL:
        return {
          ...state,
          loading: false,
          productsLoaded: false

        };
        case DELETE_PRODUCT_SUCCESS:
          let product= state.products_list.filter(
            prod => prod._id !== action.payload._id
        );
          localStorage.setItem('products_list', JSON.stringify(product))

          return {
              ...state,
             products_list:product,
              error: null,
              delete_success: true
          };
      case DELETE_PRODUCT_FAILURE:
          return {
              ...state,
              error: payload.error,
              delete_success: false
          };
          case UPDATE_PRODUCT_SUCCESS:
              let succesProducts = state.products_list;
              for(var i = 0; i<succesProducts.length; i++){
                if (succesProducts[i]._id===payload._id){
                  succesProducts[i]=payload;
              }
            }
            
          localStorage.setItem('products_list',JSON.stringify( succesProducts))
              return {
                  ...state,
                  update_success:true,
                  products_list: succesProducts
              };
          case UPDATE_PRODUCT_FAILURE:
              return {
                  ...state,
                  //error: action.payload.error,
                  update_success: false
              };
  
  
      default:
        return state;
    }
  };
  
  // export default categoryProductsReducer;
  