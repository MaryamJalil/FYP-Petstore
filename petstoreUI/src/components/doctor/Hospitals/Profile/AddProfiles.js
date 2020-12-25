import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {addProfile} from '../../../../actions/profileActions/profileAction';
import { createProfile } from '../../../../actions/profileActions/profileAction';
import Alert from '../../../../layout/Alert';
import { getAllHospitals } from "../../../../actions/hospitalActions/hospitalActions";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const useStyles = makeStyles((theme) => ({

  input: {
    display: 'none',
  },
}));


const AddProfiles = ({ auth, profile, hospital, createProfile, getAllHospitals,
    }) => {
  const classes = useStyles();
  const [imgs, setImgs] = useState();
  const [disableIcon,setDisableIcon]=useState(true)

  useEffect(() => {
if(profile.create_success===true) {
  setDisableIcon(false);
}
  },
  [profile.create_success])

  // importing categories and laoding state from out store


  // react redux method to dispatch our functions
  const dispatch = useDispatch();

  // fetch all the the categories with dispatch before our component render
  useEffect(() => {
    getAllHospitals();
  }, [getAllHospitals]);


  const [form, setForm] = useState({
    name: '',
    address: '',
    experience: '',
    contact: '',
    hospital:''

  });



  const count = useSelector(state => state);


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };

//   const handleImageChange =e=> {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];
// console.log(file)
//     reader.onloadend = () => {
//         setImgs(file);
//     }

//     const formData = new FormData();
//     formData.append('photo', file);

//     uploadProfilePhoto(formData,profile.newly_created_profile_id)
//     reader.readAsDataURL(file)
// }

  const clickSubmit = e => {
    e.preventDefault();
    createProfile(form,auth.user._id)
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
        <label className="text-dark">Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          onChange={handleChange}
          value={form.address}
          autoFocus
          required
        /><label className="text-dark">Experience</label>
        <input
          type="text"
          name="experience"
          className="form-control"
          onChange={handleChange}
          value={form.experience}
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
        <label className="text-dark">Hospital</label>

        <Form.Control as="select" name='hospital' className='form-control' onChange={handleChange}>
          {<option>                  Choose profile hospital</option>}
          {
            (
              <>
                {/* <option value='' disabled>
                  Choose profile hospital
                      </option> */}
                {hospital.hospital_list.map(hosp => {
                  return (
                    <option key={hosp._id} value={hosp._id}>
                      {hosp.name}
                    </option>
                  );
                })}
              </>
            )}
        </Form.Control>
        
        
       {/* <input accept="image/*"  disabled={disableIcon} 
       className={classes.input} id="icon-button-file" type="file" onChange={handleImageChange}

       />
      <label htmlFor="icon-button-file">
        <IconButton disabled={disableIcon} color="primary" aria-label="upload picture" component="span">
          <PhotoCamera  />
        </IconButton>
      </label> */}
      </div>
      <Button 
      style={{marginBottom:"50px",marginLeft:"200px",backgroundColor:"#D81B60"}} type="submit" >Create
      </Button>
    </form>
  );
};

AddProfiles.propTypes = {
  auth: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  // uploadProfilePhoto:  PropTypes.func.isRequired,
  hospital: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,

};


// const mapDispatchToProps = (dispatch) => ({
//   getAllHospitals:() => dispatch(getAllHospitals()),

//   });
const mapStateToProps = state => ({
  auth: state.auth,
  hospital: state.hospital,
  profile: state.profile
})
export default (connect(mapStateToProps, { getAllHospitals, createProfile })(AddProfiles));
