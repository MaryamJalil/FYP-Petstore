import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {addProduct} from '../../../../actions/productActions/productAction';
import { createProduct, uploadProductPhoto } from '../../../../actions/productActions/productAction';
import Alert from '../.././../../layout/Alert';
import { getAllCategories } from "../../../../actions/categoryActions/categoryAction";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const useStyles = makeStyles((theme) => ({

  input: {
    display: 'none',
  },
}));


const AddProducts = ({ auth, product, category, createProduct, getAllCategories,
   uploadProductPhoto }) => {
  const classes = useStyles();
  const [imgs, setImgs] = useState();
  const [disableIcon,setDisableIcon]=useState(true)

  useEffect(() => {
if(product.create_success===true) {
  setDisableIcon(false);
}
  },
  [product.create_success])

  // importing categories and laoding state from out store


  // react redux method to dispatch our functions
  const dispatch = useDispatch();

  // fetch all the the categories with dispatch before our component render
  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);


  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    shipping: '',
    quantity: '',
    category:''

  });



  const count = useSelector(state => state);


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };

  const handleImageChange =e=> {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
console.log(file)
    reader.onloadend = () => {
        setImgs(file);
    }

    const formData = new FormData();
    formData.append('photo', file);

    uploadProductPhoto(formData,product.newly_created_product_id)
    reader.readAsDataURL(file)
}

  const clickSubmit = e => {
    e.preventDefault();
    createProduct(form,auth.user._id)
  }
 
  return (
    <form onSubmit={clickSubmit} style={{  backgroundColor:"#F8BBD0"}}>
      <div className="form-group" style={{
      paddingLeft:"200px",paddingRight:"200px",paddingTop:"40px"}}>
        <Alert />
        <label className="text-dark">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={form.name}
          autoFocus
          required
        />
        <label className="text-dark">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          onChange={handleChange}
          value={form.description}
          autoFocus
          required
        /><label className="text-dark">Price</label>
        <input
          type="text"
          name="price"
          className="form-control"
          onChange={handleChange}
          value={form.price}
          autoFocus
          required
        /><label className="text-dark">Category</label>

        <Form.Control as="select" name='category' className='form-control' onChange={handleChange}>
          {<option>                  Choose product category</option>}
          {
            (
              <>
                {/* <option value='' disabled>
                  Choose product category
                      </option> */}
                {category.category_list.map(pet => {
                  return (
                    <option key={pet._id} value={pet._id}>
                      {pet.name}
                    </option>
                  );
                })}
              </>
            )}
        </Form.Control>
        <label className="text-dark">Quantity</label>
        <input
          type="text"
          name="quantity"
          className="form-control"
          onChange={handleChange}
          value={form.quantity}
          autoFocus
          required
        />

        <label className="text-dark">Shipping</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={form.ship}
          name="shipping"
          autoFocus

          required
        />
       <input accept="image/*"  disabled={disableIcon} 
       className={classes.input} id="icon-button-file" type="file" onChange={handleImageChange}

       />
      <label htmlFor="icon-button-file">
        <IconButton disabled={disableIcon} color="primary" aria-label="upload picture" component="span">
          <PhotoCamera  />
        </IconButton>
      </label>
      </div>
      <Button 
      style={{marginBottom:"50px",marginLeft:"200px",backgroundColor:"#D81B60"}} type="submit">Create
      </Button>
    </form>
  );
};

AddProducts.propTypes = {
  auth: PropTypes.object.isRequired,
  createProduct: PropTypes.func.isRequired,
  uploadProductPhoto:  PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,

};


// const mapDispatchToProps = (dispatch) => ({
//   getAllCategories:() => dispatch(getAllCategories()),

//   });
const mapStateToProps = state => ({
  auth: state.auth,
  category: state.category,
  product: state.product
})
export default (connect(mapStateToProps, { getAllCategories, createProduct, uploadProductPhoto })(AddProducts));
