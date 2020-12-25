import React, { useEffect ,useState, useDispatch} from "react";

// import { isAuthenticated } from "../../../auth";
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllCategories } from '../../../../actions/categoryActions/categoryAction';
import {DeleteCategories } from '../../../../actions/categoryActions/categoryAction';
import {updateCategories } from '../../../../actions/categoryActions/categoryAction';
import {getProductsBycategoryId} from '../../../../actions/productActions/productAction';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { toast, Slide } from "react-toastify";
import Alert from '../../../../layout/Alert'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
//   export default function CustomizedButtons() {

//   }

const GetCategories = ({ auth, category, product,getAllCategories, DeleteCategories ,updateCategories,
getProductsBycategoryId}) => {
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
            history.push('/seller/product')
    }
    }, [ product])

const handleDelete = (obj) => {
        DeleteCategories(obj._id, obj.userId)

    };
    const handleShow = (id,userId) => {
        getProductsBycategoryId(id,userId);

    };
    
    const onClick= async (e, obj)=>{
        setAllow(true);
        var result = await updateCategories(obj._id, obj.userId,e.target.value);
        

    }
    const handleChange=(e, ref)=>{
        ref.current.value = e.target.value


    }

 
    const classes = useStyles();

    return (
        <div className="center">

<Table striped bordered hover >
  <thead>
    <tr style={{backgroundColor:"#E91E63"}}>
      <th>#</th>
      <th>Category</th>
      <th>Edit</th>
      <th>Delete</th>
      <th>Show</th>
    </tr>
  </thead>
  <tbody style={{backgroundColor:"#FCE4EC"}} >
  {
                            category.category_list.map((obj, index,id)=>{
                            var ref = React.createRef()
                            return(
                            <tr key={index}>
                                <td className="modaltext" >{index+1}</td>



                                <td className="modaltext">{obj.name}</td>
                

                                <td className="modaltext">



{/* <input type="text" id="updatedCategory" onChange={(e)=>handleChange(e, ref)} defaultValue={obj.name} />
                                        
  <Button variant="contained" color="primary" className={classes.margin} 
             ref={ref} onClick={(e)=>{onClick(e, obj)}}>Edit

        </Button> */}
        <InputGroup style={{marginTop:'8px'}}>
    <FormControl
    id="updatedCategory" onChange={(e)=>handleChange(e, ref)} defaultValue={obj.name}
    />
    <InputGroup.Append>
    <Button variant="contained" color="primary" 
             ref={ref} onClick={(e)=>{onClick(e, obj)}}>Edit

        </Button> 
    </InputGroup.Append>
  </InputGroup>
                                </td>

                                <td className="modaltext">
                                <Button variant="contained" color="secondary" className={classes.margin} 
                                onClick={()=>{handleDelete(obj)}}>
          Delete
        </Button>
                                    </td>
                    <td>  <ColorButton variant="contained" color="primary" 
                    className={classes.margin} onClick={()=>{handleShow(obj._id)}}>
        Show 
      </ColorButton></td>
                            </tr>
                            )
    })}                       
  </tbody>
</Table>

          
                
        </div>
    );
};

GetCategories.propTypes = {
    auth: PropTypes.object.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    DeleteCategories:PropTypes.func.isRequired,
    getProductsBycategoryId:PropTypes.func.isRequired
};

const mapStateToProps = (state,categoryReducer) => ({
    auth: state.auth,
    category: state.category,
    _id: categoryReducer._id,
    categoryId:state.categoryId,
    product:state.product
});

const mapDispatchToProps = (dispatch) => ({
getAllCategories:() => dispatch(getAllCategories()),
DeleteCategories:(_id,userId) => dispatch(DeleteCategories(_id,userId)),
updateCategories:(_id,name,userId) => dispatch(updateCategories(_id,name,userId)),
getProductsBycategoryId:(_id)=>dispatch(getProductsBycategoryId(_id))

});
// export default (connect(mapStateToProps, { getAllCategories ,DeleteCategories})(GetCategories));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetCategories));

