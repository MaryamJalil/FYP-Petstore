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
import Button from 'react-bootstrap/Button';
import Modal from '@material-ui/core/Modal';

import {getAllPharms} from '../../../actions/pharmActions/pharmAction';
import { getPharmacyByPharmId  } from '../../../actions/pharmacyActions/pharmacyAction';
import PharmacyReviewCard from './PharmacyReviewCard'
 
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
  

 
  
 const  FetchPharmacy=({auth, getPharmacyByPharmId  ,pharm,pharmacy,getAllPharms})=>{
  const [opencard, setOpenCard] = React.useState(false);

  const [allow, setAllow]=useState(true)
  useEffect(() => {
      if(allow){
      getPharmacyByPharmId  ();
      setAllow(false);
  }
  }, [getPharmacyByPharmId  , pharmacy])
  const classes = useStyles();
  function handleOpenCard() {

    // setForm(obj)
    setOpenCard(true);
  };

  function handleCloseCard() {
    setOpenCard(false);
    // setForm(null)
  };
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    expirydate:'',
    shipping: '',
    quantity: '',
    pharm:''

  });

  return(
    <div className="container">
    <CardGroup style={{marginTop:"45px"}}>
    <Card className="container">
    
       <label className="text-muted">Category</label>
       <label className="text-muted">{form.description}</label>
 
      <TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell >Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Expiry Date</TableCell>
            <TableCell >Shipping</TableCell>
            <TableCell >Photo</TableCell>
            <TableCell >Show</TableCell>

        


          </TableRow>
        </TableHead>
        <TableBody>
          {pharmacy && pharmacy.pharmacy_list.map((obj) => (
            <TableRow key={obj._id}>
              <TableCell component="th" scope="row">
                {obj.name}
              </TableCell>
              <TableCell >{obj.description}</TableCell>
              <TableCell align="right">{obj.price}</TableCell>
              <TableCell >{obj.pharm.name}</TableCell>
              <TableCell align="right">{obj.quantity}</TableCell>
              <TableCell align="right">{obj.expirydate}</TableCell>

              <TableCell >{obj.shipping ? "Yes" : "No"}</TableCell>
          <TableCell >
            {obj && obj.photo ? 
             <div className={classes.root}>
             <Avatar src={publicFolderUrl+'/'+obj.photo} />
           </div>
          
       :
       <Avatar>{obj.name[0]}</Avatar>
      }
           
    </TableCell>
    <TableCell>
      {/* {obj.map(<ProductReviewCard/>) } */}
          <Button variant="info"   onClick={ ()=>handleOpenCard()}>Show</Button>
          <Modal    open={opencard}
  onClose={handleCloseCard}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description">
 
      <PharmacyReviewCard pharmacysData={obj}/>
      
      
</Modal>
          </TableCell>
    <TableCell>   
    

      </TableCell>
  
            </TableRow>

          ))}
        </TableBody>

      </Table>
    </TableContainer>
      



  </Card>
 </CardGroup> 
</div>
  )
}
FetchPharmacy.propTypes = {
  auth: PropTypes.object.isRequired,
  getPharmacyByPharmId  : PropTypes.func.isRequired,
  pharmacy: PropTypes.object.isRequired

};


const mapStateToProps = state => ({
  auth: state.auth,
//   pharmId:state.pharmId,
  pharm: state.pharm,
  pharmacy: state.pharmacy,

 

})
export default (connect (mapStateToProps, {getPharmacyByPharmId ,getAllPharms }) (FetchPharmacy));
