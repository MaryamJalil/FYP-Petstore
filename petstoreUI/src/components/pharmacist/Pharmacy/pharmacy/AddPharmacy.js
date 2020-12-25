import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {addProduct} from '../../../../actions/pharmacyActions/pharmacyAction';
import { createPharmacy, uploadPharmacyPhoto } from '../../../../actions/pharmacyActions/pharmacyAction';
import Alert from '../../../../layout/Alert';
import { getAllPharms } from "../../../../actions/pharmActions/pharmAction";
import Form from 'react-bootstrap/Form'



const useStyles = makeStyles((theme) => ({

  input: {
    display: 'none',
  },
}));


const AddPharmacy = ({ auth, pharmacy, pharm, createPharmacy, getAllPharms, uploadPharmacyPhoto }) => {
  const classes = useStyles();
  const [imgs, setImgs] = useState();
  const [disableIcon,setDisableIcon]=useState(true)

  useEffect(() => {
if(pharmacy.create_success===true) {
  setDisableIcon(false);
}
  },
  [pharmacy.create_success])

  // importing categories and laoding state from out store


  // react redux method to dispatch our functions
  const dispatch = useDispatch();

  // fetch all the the categories with dispatch before our component render
  useEffect(() => {
    getAllPharms();
  }, [getAllPharms]);


  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    shipping: '',
    quantity: '',
    expirydate: '',
    pharm:''

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

    uploadPharmacyPhoto(formData,pharmacy.newly_created_pharmacy_id)
    reader.readAsDataURL(file)
}

  const clickSubmit = e => {
    e.preventDefault();
    createPharmacy(form,auth.user._id)
  }
 
  return (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <Alert />
        <label className="text-muted">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={form.name}
          autoFocus
          required
        />
        <label className="text-muted">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          onChange={handleChange}
          value={form.description}
          autoFocus
          required
        /><label className="text-muted">Price</label>
        <input
          type="text"
          name="price"
          className="form-control"
          onChange={handleChange}
          value={form.price}
          autoFocus
          required
        /><label className="text-muted">Category</label>

        <Form.Control as="select" name='pharm' className='form-control' onChange={handleChange}>
          {<option>loading...</option>}
          {
            (
              <>
                <option value='' disabled>
                  Choose pharmacy pharm
                      </option>
                {pharm.pharm_list.map(pet => {
                  return (
                    <option key={pet._id} value={pet._id}>
                      {pet.name}
                    </option>
                  );
                })}
              </>
            )}
        </Form.Control>
        <label className="text-muted">Quantity</label>
        <input
          type="text"
          name="quantity"
          className="form-control"
          onChange={handleChange}
          value={form.quantity}
          autoFocus
          required
        />
        <label className="text-muted">Expiry Date</label>
        <input
          type="text"
          name="expirydate"
          className="form-control"
          onChange={handleChange}
          value={form.expirydate}
          autoFocus
          required
        />
        <label className="text-muted">Shipping</label>
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
      <button className="btn btn-outline-primary">Create Product</button>
    </form>
  );
};

AddPharmacy.propTypes = {
  auth: PropTypes.object.isRequired,
  createPharmacy: PropTypes.func.isRequired,
  uploadPharmacyPhoto:  PropTypes.func.isRequired,
  pharm: PropTypes.object.isRequired,
  pharmacy: PropTypes.object.isRequired,

};


// const mapDispatchToProps = (dispatch) => ({
//   getAllPharms:() => dispatch(getAllPharms()),

//   });
const mapStateToProps = state => ({
  auth: state.auth,
  pharm: state.pharm,
  pharmacy: state.pharmacy
})
export default (connect(mapStateToProps, { getAllPharms, createPharmacy, uploadPharmacyPhoto })(AddPharmacy));
