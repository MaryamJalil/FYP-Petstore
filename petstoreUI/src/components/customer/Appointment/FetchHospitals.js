import React, { useState, useEffect } from 'react';
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import { getAllHospitals } from '../../../actions/hospitalActions/hospitalActions';
import { getProfilesByhospitalId } from '../../../actions/profileActions/profileAction';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors'; 

 const  FetchHospitals=({auth, getAllHospitals,hospital, getProfilesByhospitalId ,profile})=>{
  const history = useHistory();
  const [allow, setAllow]=useState(true)
  useEffect(() => {
      if(allow){
      getAllHospitals();
      setAllow(false);
  }
  }, [getAllHospitals, hospital])
  useEffect(() => {
    if(profile.profilesLoaded){
        history.push('/customer/profile')
}
}, [ profile])


  const handleShow = (id) => {
    console.log(id)
     getProfilesByhospitalId (id);
};

  return(
    <div className="container">
       <Card  
       border="success" style={{ width: '18rem' }} style={{marginTop:"45px",backgroundColor:'#E1BEE7'}}>
    <Card.Header style={{backgroundColor:'#7B1FA2'}}>Hospitals</Card.Header>
    <Card.Body>
      {/* <Card.Title>Success Card Title</Card.Title> */}
      <Card.Text style={{backgroundColor:'#E1BEE7'}}>
      <table >
             
             <tbody >
                     {
                         hospital.hospital_list.map((obj, index,id)=>{
                         var ref = React.createRef()
                         return(
                         <tr key={index} >
                             {/* <td className="modaltext" >{index+1}</td> */}



                             <td className="modaltext">{obj.name}</td>
             

                             

                            
                 <td style={{padding:'20px'}}>   <Button variant="contained"
                 style={{backgroundColor:'#9C27B0'}}
                 onClick={()=>{handleShow(obj._id)}}>
     Show Doctors
   </Button></td>
                         </tr>
                         )
 })}                       

                 </tbody>
         </table>
      </Card.Text>
    </Card.Body>
  </Card>

  

</div>
  )
}
FetchHospitals.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllHospitals: PropTypes.func.isRequired,
   getProfilesByhospitalId :PropTypes.func.isRequired

};


const mapStateToProps = state => ({
  auth: state.auth,
  hospitalId:state.hospitalId,
  hospital: state.hospital,
  profile: state.profile,


})
export default (connect (mapStateToProps, {getAllHospitals, getProfilesByhospitalId }) (FetchHospitals));
