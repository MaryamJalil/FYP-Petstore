import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPetlost, uploadLostpetPhoto } from '../../../../actions/lostpetActions/lostpetAction';
import Alert from '../../../../layout/Alert';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const useStyles = makeStyles((theme) => ({

  input: {
    display: 'none',
  },
}));


const AddLostpet = ({ auth, lostpet, createPetlost,uploadLostpetPhoto }) => {
  const classes = useStyles();
  const [imgs, setImgs] = useState();
  const [disableIcon,setDisableIcon]=useState(true)

  useEffect(() => {
if(lostpet.create_success===true) {
  setDisableIcon(false);
}
  },
  [lostpet.create_success])

  // importing categories and laoding state from out store


  // react redux method to dispatch our functions
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getAllCategories();
  // }, [getAllCategories]);


  const [form, setForm] = useState({
    name: '',
    description: '',
    breed: '',
    contact: '',

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

    uploadLostpetPhoto(formData,lostpet.newly_created_lostpet_id)
    reader.readAsDataURL(file)
}

  const clickSubmit = e => {
    e.preventDefault();
    console.log("form ka data",form)
    createPetlost(form,auth.user._id)
  }
 
  return (
    <form onSubmit={clickSubmit} style={{  backgroundColor:"#F8BBD0", marginTop:"40px"}}>
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
        /><label className="text-dark">Breed</label>
        <input
          type="text"
          name="breed"
          className="form-control"
          onChange={handleChange}
          value={form.breed}
          autoFocus
          required
        />
        <label className="text-dark">Contact</label>
        <input
          type="text"
          name="contact"
          className="form-control"
          onChange={handleChange}
          value={form.contact}
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
      style={{marginBottom:"50px",marginLeft:"200px",backgroundColor:"#D81B60"}} type="submit" >Create
      </Button>
    </form>
  );
};

AddLostpet.propTypes = {
  auth: PropTypes.object.isRequired,
  createPetlost: PropTypes.func.isRequired,
  uploadLostpetPhoto: PropTypes.func.isRequired,
  lostpet: PropTypes.object.isRequired,

};


const mapStateToProps = state => ({
  auth: state.auth,
  lostpet: state.lostpet
})
export default (connect(mapStateToProps, { createPetlost,uploadLostpetPhoto})(AddLostpet));
