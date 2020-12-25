import React, { useState, useEffect } from 'react';
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {publicFolderUrl} from '../../../config/utilities'
import Button from 'react-bootstrap/Button'
// import ProfileReviewCard from './ProfileReviewCard'
import { getAllHospitals} from '../../../actions/hospitalActions/hospitalActions';
import Appointment from './Appointment'
import { getProfilesByhospitalId }   from '../../../actions/profileActions/profileAction';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      }},
    table: {
      minWidth: 650,
    },
    button: {
      margin: theme.spacing(1),
    },

    margin: {
      margin: theme.spacing(1),
    },
    
  }));
  

 
  
 const  FetchProfiles=({auth, getProfilesByhospitalId ,hospital,profile,getAllHospitals})=>{
  const [opencard, setOpenCard] = React.useState(false);
  const [allow, setAllow]=useState(true)
  // useEffect(() => {
  //     if(allow){
  //     getProfilesByhospitalId (hospitalId);
  //     setAllow(false);
  // }
  // }, [getProfilesByhospitalId , profile])
  function handleOpenCard() {

    // setForm(obj)
    setOpenCard(true);
  };

  function handleCloseCard() {
    setOpenCard(false);
    // setForm(null)
  };
  const classes = useStyles();

  const [form, setForm] = useState({
    name: '',
    address: '',
    experience: '',
    contact: '',
    hospital: ''

  });
  const [modalShow, setModalShow] = React.useState(false);

  return(
    
    <div className="container" style={{marginTop:"45px"}}>
  
  
    
      <Table aria-label="simple table" >
        <TableHead >
          <TableRow style={{backgroundColor:'#7B1FA2'}} >
            <TableCell>Name</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Experience</TableCell>
            <TableCell >Contact</TableCell>
            <TableCell >Hospital</TableCell>
            <TableCell >Appointment</TableCell>

        


          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:'#E1BEE7'}}>
          {profile && profile.profiles_list.map((obj) => (
            <TableRow key={obj._id}>
              <TableCell component="th" scope="row">
                {obj.name}
              </TableCell>
              <TableCell >{obj.address}</TableCell>
              <TableCell >{obj.experience}</TableCell>
              <TableCell >{obj.contact}</TableCell>
              <TableCell >{obj.hospital.name}</TableCell>
              {/* <TableCell><Button variant="contained"
                 style={{backgroundColor:'#9C27B0'}} >Appointment</Button></TableCell> */}
                 <TableCell>

      <Button variant="contained"
                 style={{backgroundColor:'#9C27B0'}} onClick={() => setModalShow(true)}>
       Appointment
      </Button>

      <Appointment
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  
    </TableCell>


        
    {/* <TableCell> */}
      {/* {obj.map(<ProfileReviewCard/>) } */}
          {/* <Button variant="info"   onClick={ ()=>handleOpenCard()}>Info</Button>
          <Modal    open={opencard}
  onClose={handleCloseCard}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description">
 
      <ProfileReviewCard profilesData={obj}/>
      
      
</Modal>
          </TableCell> */}

  
            </TableRow>

          ))}
        </TableBody>

      </Table>


</div>
  )
}
FetchProfiles.propTypes = {
  auth: PropTypes.object.isRequired,
  getProfilesByhospitalId : PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired

};


const mapStateToProps = state => ({
  auth: state.auth,
//   hospitalId:state.hospitalId,
  hospital: state.hospital,
  profile: state.profile,

 

})
export default (connect (mapStateToProps, {getProfilesByhospitalId,getAllHospitals}) (FetchProfiles));
