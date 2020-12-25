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
import {getLostpet} from '../../actions/lostpetActions/lostpetAction';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import {publicFolderUrl} from '../../config/utilities'

// import ProductReviewCard from './LostPetReviewCard'
var data= [];
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



const FetchInfo= ({ auth, lostpet,getLostpet})=>{

  const [form, setForm] = useState({
    name: '',
    description: '',
    breed: '',
    contact: '',

  });

  const [allow, setAllow]=useState(true)
  useEffect(() => {
      if(allow){
      getLostpet();
      setAllow(false);
  }
  }, [getLostpet, lostpet])





    const classes = useStyles();

  
       
  
    var ref = React.createRef()


    return (
      <div >
      <TableContainer className="container" style={{marginTop:'40px'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow  style={{backgroundColor:"#E91E63"}}>
            <TableCell>Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Breed</TableCell>
            <TableCell >Contact</TableCell>
            <TableCell >Photo</TableCell>
 

          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:"#FCE4EC"}}>
          {lostpet && lostpet.lostpet_list.map((obj) => (
            <TableRow key={obj._id}>
              <TableCell component="th" scope="row">
                {obj.name}
              </TableCell>
              <TableCell >{obj.description}</TableCell>
              <TableCell >{obj.breed}</TableCell>
              <TableCell >{obj.contact}</TableCell>
          <TableCell >
            {obj && obj.photo ? 
             <div className={classes.root}>
             <Avatar src={publicFolderUrl+'/'+obj.photo} />
           </div>
          
       :
       <Avatar>{obj.name[0]}</Avatar>
      }
           
    </TableCell>
    
  
            </TableRow>

          ))}
        </TableBody>

      </Table>
    </TableContainer>
      </div>

    );

  }


  FetchInfo.propTypes = {
    auth: PropTypes.object.isRequired,
    lostpet: PropTypes.object.isRequired,
    getLostpet: PropTypes.object.isRequired
};



const mapStateToProps = state => ({
    auth: state.auth,
    lostpet: state.lostpet,
    lostpetId: state.lostpetId

  })

export default (connect(mapStateToProps, {getLostpet})(FetchInfo));
