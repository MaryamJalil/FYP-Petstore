import React, { useEffect ,useState, useDispatch} from "react";

// import { isAuthenticated } from "../../../auth";
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllHospitals } from '../../../../actions/hospitalActions/hospitalActions';
import {DeleteHospitals } from '../../../../actions/hospitalActions/hospitalActions';
import {updateHospitals } from '../../../../actions/hospitalActions/hospitalActions';
import {getProfilesByhospitalId} from '../../../../actions/profileActions/profileAction';
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

const GetHospitals = ({ auth, hospital, profile,getAllHospitals, DeleteHospitals ,updateHospitals,
getProfilesByhospitalId}) => {
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
            history.push('/doctor/profile')
    }
    }, [ profile])

const handleDelete = (obj) => {
        DeleteHospitals(obj._id, obj.userId)

    };
    const handleShow = (id,userId) => {
        getProfilesByhospitalId(id,userId);

    };
    
    const onClick= async (e, obj)=>{
        setAllow(true);
        var result = await updateHospitals(obj._id, obj.userId,e.target.value);
        

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
      <th>Hospital</th>
      <th>Edit</th>
      <th>Delete</th>
      <th>Show</th>
    </tr>
  </thead>
  <tbody style={{backgroundColor:"#FCE4EC"}} >
  {
                            hospital.hospital_list.map((obj, index,id)=>{
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

GetHospitals.propTypes = {
    auth: PropTypes.object.isRequired,
    getAllHospitals: PropTypes.func.isRequired,
    DeleteHospitals:PropTypes.func.isRequired,
    getProfilesByhospitalId:PropTypes.func.isRequired
};

const mapStateToProps = (state,hospitalReducer) => ({
    auth: state.auth,
    hospital: state.hospital,
    _id: hospitalReducer._id,
    hospitalId:state.hospitalId,
    profile:state.profile
});

const mapDispatchToProps = (dispatch) => ({
getAllHospitals:() => dispatch(getAllHospitals()),
DeleteHospitals:(_id,userId) => dispatch(DeleteHospitals(_id,userId)),
updateHospitals:(_id,name,userId) => dispatch(updateHospitals(_id,name,userId)),
getProfilesByhospitalId:(_id)=>dispatch(getProfilesByhospitalId(_id))

});
// export default (connect(mapStateToProps, { getAllHospitals ,DeleteHospitals})(GetHospitals));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetHospitals));

