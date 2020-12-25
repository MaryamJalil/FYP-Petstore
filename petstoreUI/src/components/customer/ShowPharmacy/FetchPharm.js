import React, { useState, useEffect } from 'react';
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import {  getAllPharms } from '../../../actions/pharmActions/pharmAction';
import {getPharmacyByPharmId } from '../../../actions/pharmacyActions/pharmacyAction';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors'; 

 const  FetchPharm=({auth,  getAllPharms,pharm,getPharmacyByPharmId ,pharmacy})=>{
  const history = useHistory();

  const [allow, setAllow]=useState(true)
  useEffect(() => {
      if(allow){
       getAllPharms();
      setAllow(false);
  }
  }, [ getAllPharms, pharm])
  // const [allow, setAllow]=useState(true)
  // useEffect(() => {
  //     if(allow){

  //      getAllPharms();
  //     setAllow(false);

  // }
  // }, [ getAllPharms, pharm])
  useEffect(() => {
      if(pharmacy.pharmacyLoaded){
          history.push('/customer/pharmacy')
  }
  }, [ pharmacy])

  const handleShow = (id )=> {
    console.log(id)
    getPharmacyByPharmId (id);
};

  // const [form, setForm] = useState({
  //   name: '',
  //   price: '',
  //   description: '',
  //   shipping: '',
  //   quantity: '',
  //   pharm:''

  // });


  // const handleChange = e => {
  //   // setForm({ ...form, [e.target.name]: e.target.value });
  //   setForm({ [e.target.name]: e.target.value })


  // };
  return(
    <div className="container">
    <CardGroup style={{marginTop:"45px"}}>
    <Card className="container">

    <div className="container" style={{padding:'20px'}}>
            <table>
                {/* <thead>
                    <tr >
                        <th className="modaltext">No</th>
                        <th className="modaltext"> Name</th>
               
                    </tr>
                </thead> */}
                <tbody>
                        {
                            pharm.pharm_list.map((obj, index,id)=>{
                            var ref = React.createRef()
                            return(
                            <tr key={index}>
                                {/* <td className="modaltext" >{index+1}</td> */}



                                <td className="modaltext">{obj.name}</td>
                

                                

                               
                    <td  style={{padding:'20px'}}>  <Button variant="contained" color="primary" 
                    onClick={()=>{handleShow(obj._id)}}>
        Show Products
      </Button></td>
                            </tr>
                            )
    })}                       

                    </tbody>
            </table>
        </div>
 
  </Card>

</CardGroup>
</div>
  )
}
FetchPharm.propTypes = {
  auth: PropTypes.object.isRequired,
   getAllPharms: PropTypes.func.isRequired,
  getPharmacyByPharmId :PropTypes.func.isRequired

};


const mapStateToProps = state => ({
  auth: state.auth,
  pharmId:state.pharmId,
  pharm: state.pharm,
  pharmacy: state.pharmacy,


})
export default (connect (mapStateToProps, { getAllPharms,getPharmacyByPharmId }) (FetchPharm));
