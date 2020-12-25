import React, { useState, useEffect } from 'react';
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import { getAllCategories } from '../../../actions/categoryActions/categoryAction';
import {getProductsBycategoryId} from '../../../actions/productActions/productAction';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors'; 

 const  FetchCategories=({auth, getAllCategories,category,getProductsBycategoryId,product})=>{
  const history = useHistory();
  const [allow, setAllow]=useState(true)
  useEffect(() => {
      if(allow){
      getAllCategories();
      setAllow(false);
  }
  }, [getAllCategories, category])
  useEffect(() => {
    if(product.productsLoaded){
        history.push('/customer/product')
}
}, [ product])


  const handleShow = (id) => {
    console.log(id)
    getProductsBycategoryId(id);
};

  return(
    <div className="container">
    <CardGroup style={{marginTop:"45px"}}>
    <Card className="container">
  
    <div className="container" style={{padding:'20px'}}>
            <table >
                {/* <thead>
                    <tr >
                        <th className="modaltext">No</th>
                        <th className="modaltext"> Name</th>
               
                    </tr>
                </thead> */}
                <tbody >
                        {
                            category.category_list.map((obj, index,id)=>{
                            var ref = React.createRef()
                            return(
                            <tr key={index} >
                                {/* <td className="modaltext" >{index+1}</td> */}



                                <td className="modaltext">{obj.name}</td>
                

                                

                               
                    <td style={{padding:'20px'}}>   <Button variant="contained" color="primary" 
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
FetchCategories.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getProductsBycategoryId:PropTypes.func.isRequired

};


const mapStateToProps = state => ({
  auth: state.auth,
  categoryId:state.categoryId,
  category: state.category,
  product: state.product,


})
export default (connect (mapStateToProps, {getAllCategories,getProductsBycategoryId}) (FetchCategories));
