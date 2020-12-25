import React, { useEffect ,useState, useDispatch} from "react";

// import { isAuthenticated } from "../../../auth";
import { Redirect, withRouter,useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllPharms } from '../../../../actions/pharmActions/pharmAction';
import {DeletePharms } from '../../../../actions/pharmActions/pharmAction';
import {updatePharms } from '../../../../actions/pharmActions/pharmAction';
import { getPharmacyByPharmId } from '../../../../actions/pharmacyActions/pharmacyAction';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

import { toast, Slide } from "react-toastify";
import Alert from '../../../../layout/Alert'

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

const GetPharms = ({ auth, pharm, pharmacy,getAllPharms, DeletePharms ,updatePharms,
 getPharmacyByPharmId 
}) => {
    const history = useHistory();
    const [allow, setAllow]=useState(true)
    useEffect(() => {
        if(allow){
        getAllPharms();
        setAllow(false);
    }
    }, [getAllPharms, pharm])
    useEffect(() => {
        if(pharmacy.pharmacyLoaded){
            history.push('/pharmacist/pharmacy')
    }
    }, [ pharmacy])

const handleDelete = (obj) => {
        DeletePharms(obj._id, obj.userId)

    };
    const handleShow = (id) => {
      // console.log(id)
         getPharmacyByPharmId (id);

    };
    
    const onClick= async (e, obj)=>{
        setAllow(true);
        var result = await updatePharms(obj._id, obj.userId,e.target.value);
        

    }
    const handleChange=(e, ref)=>{
        ref.current.value = e.target.value


    }

 
    const classes = useStyles();

    return (
        <div className="center">
            <table>
                <thead>
                    {/* <tr >
                        <th className="modaltext">S.No</th>
                        <th className="modaltext">Category Name</th>
                        <th className="modaltext">Edit</th>
                        <th className="modaltext">Delete</th>
                    </tr> */}
                </thead>
                <tbody>
                        {
                            pharm.pharm_list.map((obj, index,id)=>{
                            var ref = React.createRef()
                            return(
                            <tr key={index}>
                                {/* <td className="modaltext" >{index+1}</td> */}



                                <td className="modaltext">{obj.name}</td>
                

                                <td className="modaltext">

                                    <input type="text" id="updatedCategory" onChange={(e)=>handleChange(e, ref)} defaultValue={obj.name} />
                                        
                                    <Button variant="contained" color="primary" className={classes.margin} 
                                onClick={()=>{handleDelete(obj)}}ref={ref} onClick={(e)=>{onClick(e, obj)}}>Edit

        </Button>
                                    {/* <button ref={ref} onClick={(e)=>{onClick(e, obj)}}>Edit</button> */}
                                </td>

                                <td className="modaltext">
                                <Button variant="contained" color="secondary" className={classes.margin} 
                                onClick={()=>{handleDelete(obj)}}>
          Delete
        </Button>
                                    {/* <button onClick={()=>{handleDelete(obj)}}>Delete</button> */}
                                    </td>
                                {/* <td className="modaltext"><button onClick={()=>{handleShow(obj._id)}}>Show Products</button></td> */}
                    <td>  <ColorButton variant="contained" color="primary" 
                    className={classes.margin} onClick={()=>{handleShow(obj._id)}}>
        Show Products
      </ColorButton></td>
                            </tr>
                            )
    })}                       

                    </tbody>
            </table>
        </div>
    );
};

GetPharms.propTypes = {
    auth: PropTypes.object.isRequired,
    getAllPharms: PropTypes.func.isRequired,
    DeletePharms:PropTypes.func.isRequired,
     getPharmacyByPharmId :PropTypes.func.isRequired
};

const mapStateToProps = (state,pharmReducer) => ({
    auth: state.auth,
    pharm: state.pharm,
    _id: pharmReducer._id,
    pharmId:state.pharmId,
    pharmacy:state.pharmacy
});

const mapDispatchToProps = (dispatch) => ({
getAllPharms:() => dispatch(getAllPharms()),
DeletePharms:(_id,userId) => dispatch(DeletePharms(_id,userId)),
updatePharms:(_id,name,userId) => dispatch(updatePharms(_id,name,userId)),
 getPharmacyByPharmId :(_id)=>dispatch( getPharmacyByPharmId (_id))

});
// export default (connect(mapStateToProps, { getAllPharms ,DeletePharms})(GetPharms));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GetPharms));

