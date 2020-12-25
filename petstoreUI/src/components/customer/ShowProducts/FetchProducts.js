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
import ProductReviewCard from './ProductReviewCard'
import { getAllCategories } from '../../../actions/categoryActions/categoryAction';
import { getProductsBycategoryId } from '../../../actions/productActions/productAction';
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
  

 
  
 const  FetchProducts=({auth, getProductsBycategoryId ,category,product,getAllCategories})=>{
  const [opencard, setOpenCard] = React.useState(false);
  const [allow, setAllow]=useState(true)
  // useEffect(() => {
  //     if(allow){
  //     getProductsBycategoryId (categoryId);
  //     setAllow(false);
  // }
  // }, [getProductsBycategoryId , product])
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
    price: '',
    description: '',
    shipping: '',
    quantity: '',
    category:''

  });
  return(
    <div className="container">
    <CardGroup style={{marginTop:"45px"}}>
    <Card className="container">
  
      <TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell >Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
            {/* <TableCell align="right">Photo</TableCell> */}
            <TableCell >Shipping</TableCell>
            <TableCell >Photo</TableCell>
            <TableCell >Show</TableCell>

        


          </TableRow>
        </TableHead>
        <TableBody>
          {product && product.products_list.map((obj) => (
            <TableRow key={obj._id}>
              <TableCell component="th" scope="row">
                {obj.name}
              </TableCell>
              <TableCell >{obj.description}</TableCell>
              <TableCell align="right">{obj.price}</TableCell>
              <TableCell >{obj.category.name}</TableCell>
              <TableCell align="right">{obj.quantity}</TableCell>
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
          <Button variant="info"   onClick={ ()=>handleOpenCard()}>Info</Button>
          <Modal    open={opencard}
  onClose={handleCloseCard}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description">
 
      <ProductReviewCard productsData={obj}/>
      
      
</Modal>
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
FetchProducts.propTypes = {
  auth: PropTypes.object.isRequired,
  getProductsBycategoryId : PropTypes.func.isRequired,
  product: PropTypes.object.isRequired

};


const mapStateToProps = state => ({
  auth: state.auth,
//   categoryId:state.categoryId,
  category: state.category,
  product: state.product,

 

})
export default (connect (mapStateToProps, {getProductsBycategoryId,getAllCategories }) (FetchProducts));
