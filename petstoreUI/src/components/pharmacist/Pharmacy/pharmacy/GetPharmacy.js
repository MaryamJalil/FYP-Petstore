import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Edit} from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import Form from 'react-bootstrap/Form'
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import {getPharmacyByPharmId  } from '../../../../actions/pharmacyActions/pharmacyAction';
import {DeletePharmacy} from '../../../../actions/pharmacyActions/pharmacyAction';
import { getAllPharms } from "../../../../actions/pharmActions/pharmAction";
import {updatePharmacy} from '../../../../actions/pharmacyActions/pharmacyAction';
import Alert from '../../../../layout/Alert';
import {publicFolderUrl} from '../../../../config/utilities'
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

import { red } from '@material-ui/core/colors';
import PharmacyReviewCard from './PharmacyReviewCard'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
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
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
       
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const GetPharmacy= ({ auth, pharmacy,pharm,getPharmacyByPharmId  ,DeletePharmacy,updatePharmacy
  ,getAllPharms})=>{
  const [orderQuantity, setOrderQuantity] = useState(0);

    const handleDelete = (obj) => {
      DeletePharmacy(obj._id)

  };
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    shipping: '',
    quantity: '',
    pharm:''

  });


  const handleChange = e => {
    // setForm({ ...form, [e.target.name]: e.target.value });
    setForm({ [e.target.name]: e.target.value })


  };
  const onClickEvent= async (e)=>{
    e.preventDefault();
   await updatePharmacy(form);
    

}
const handleChangeValue=(e)=>{
   setForm({...form, [e.target.name]:e.target.value})


}
const handleShowProduct=(e, ref)=>{
  ref.current.value = e.target.value


}
// const handleShowProduct=(obj)=>{
// setForm(obj)
// setOpen(true);

// }

  //material ui
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [opencard, setOpenCard] = React.useState(false);

    
    const [isPreviewShown, setPreviewShown] = useState(false);
    function handleOpenCard() {

      // setForm(obj)
      setOpenCard(true);
    };
  
    function handleCloseCard() {
      setOpenCard(false);
      // setForm(null)
    };
 
    const handlePreview=(e)=>{
      e.preventDefault();
  
      // setPreviewShown(true); 
      setPreviewShown({...form,[e.target.name]:e.target.value} ); 
      // setOpen(true);


      // Here we change state
  }

  
    function handleOpen(obj) {

      setForm(obj)
      setOpen(true);
    };
  
    function handleClose() {
      setOpen(false);
      setForm(null)
    };
    // open modal to edit pharmacys
    const body = () => {
      if(form)
      return (
      <div style={modalStyle} className={classes.paper}>
    
        <h2 id="simple-modal-title">Edit Pharmacy</h2>
        <Alert/>
           <form key={form._id} >
      <div className="form-group" >
        <label className="text-muted" >Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          // value={name}
          autoFocus
          required
          // onChange={(e)=>handleChangeValue(e, ref)} 
          onChange={handleChangeValue}
          defaultValue={form.name}
          
           />


        <label className="text-muted">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          // value={description}
          autoFocus
          required
          // onChange={(e)=>handleChangeValue(e, ref)} 
          onChange={handleChangeValue}

          defaultValue={form.description}

        />
        <label className="text-muted">Price</label>
        <input
          type="text"
          name="price"
          className="form-control"
          // value={price}
          autoFocus
          required
          // onChange={(e)=>handleChangeValue(e, ref)} 
          onChange={handleChangeValue}

          defaultValue={form.price}

        />
    
        <label className="text-muted">Category</label>
         <Form.Control as="select" name='pharm' className='form-control'
         onChange={handleChange} defaultValue={form.pharm} >
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
          // value={quantity}
          autoFocus
          required
          // onChange={(e)=>handleChangeValue(e, ref)} 
          onChange={handleChangeValue}

          defaultValue={form.quantity}

        />
              <label className="text-muted">Expiry Date</label>
        <input
          type="text"
          name="expirydate"
          className="form-control"
          // value={expirydate}
          autoFocus
          required
          // onChange={(e)=>handleChangeValue(e, ref)} 
          onChange={handleChangeValue}

          defaultValue={form.expirydate}

        />

        <label className="text-muted">Shipping</label>
        <input
          type="text"
          className="form-control"
          // value={ship}
          name="shipping"
          autoFocus
          required
          // onChange={(e)=>handleChangeValue(e, ref)} 
          onChange={handleChangeValue}

          defaultValue={form.shipping}

        />
      </div>
                        
       <button className="btn btn-outline-primary" 
       onClick={(e)=>{onClickEvent(e)}}>Edit Product</button>
    </form>

      </div>
      )
  else
  return '';
    }

    
  
   //Table for pharmacys   
    var ref = React.createRef()

    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
            <TableCell>Show Product</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>


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
  
    <TableCell>   <ColorButton variant="contained" color="primary" className={classes.margin}
      
            // onClick={ ()=>handleOpenCard(obj)}
            // onClick={ProductReviewCard()}
            // onClick={handlePreview}
            onClick={ ()=>handleOpenCard()}


            

 >
        Show
      </ColorButton>
      <Modal    open={opencard}
  onClose={handleCloseCard}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description">
        <PharmacyReviewCard pharmacysData={obj}/>
     
</Modal>
      </TableCell>


              <TableCell >
              <Button
                      onClick={()=>{handleDelete(obj)}}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      </TableCell>
      <TableCell >
      <Button
  
      onClick={ ()=>handleOpen(obj)}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Edit/>}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"

      >
        {body()}
        
      </Modal>

      </TableCell>
  
            </TableRow>

          ))}
        </TableBody>

      </Table>
    </TableContainer>
      

    );

  }


  GetPharmacy.propTypes = {
    auth: PropTypes.object.isRequired,
    // createProduct: PropTypes.func.isRequired,
    pharmacy: PropTypes.object.isRequired
};



const mapStateToProps = state => ({
    auth: state.auth,
    pharmacy: state.pharmacy,
    pharm: state.pharm

  })

export default (connect(mapStateToProps,
  {getPharmacyByPharmId  ,DeletePharmacy,getAllPharms,updatePharmacy})(GetPharmacy));
