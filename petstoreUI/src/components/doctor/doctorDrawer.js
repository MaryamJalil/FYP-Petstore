import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { AiTwotoneShopping } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { RiAccountPinBoxLine} from "react-icons/ri";
import {GoSignOut} from "react-icons/go";
import {AiFillDashboard} from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import {AiFillReconciliation} from "react-icons/ai";
import { RiInboxArchiveLine} from "react-icons/ri";
 import {GrLocation} from 'react-icons/gr';
 import Image from 'react-bootstrap/Image';
 import mike from './img/mike.jpg';
import {MdNotifications} from "react-icons/md"




import { Link } from 'react-router-dom';




// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css'; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundcolor:'#484848',

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor:'#424242',

    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    // backgroundColor:'#000000',

    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,

  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DoctorDrawer() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
    

    
    <div className={classes.root}>

      <CssBaseline />
      <AppBar
        position="fixed"
        backgroundcolor="#e76f51"

        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >

        <Toolbar style={{   backgroundColor:'#424242',
}}>
          <IconButton
            // color="inherit"
            
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <div style={{color: '#ffffff'}}>

            <MenuIcon  />
            </div>
          </IconButton >
          <Typography variant="h6">
            Pet Store
          </Typography>
          
        </Toolbar>
    
        
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={classes.drawerHeader} >
          <MenuIcon  onClick={handleDrawerClose}   style={{  backgroundcolor:"#ffffff"  }}/>
        </div>

        <div className="container-fluid"   style={{backgroundColor:"#2a9d8f"}}>
        <List >
        {/* <AiFillHome size={25} /> */}
        {/* <Image src={mike}  /> */}
        <Image src={mike} roundedCircle style={{width:'100px', marginBottom:'10px',marginLeft:'55px',marginTop:"15px"}} />



        <Link to="/" className="navbar-brand"  bg="dark" variant="dark" style={{color:"#03071e" ,padding:'20px'}}>
         Doctor</Link>

        </List>
        <Divider/>
        <Container >
        
        <List >
        <AiFillDashboard size={25} />
        <Link to="/doctor"   bg="dark" variant="dark"  style={{color:"#03071e"}}>Dashboard</Link>

        </List>
        </Container>
        
        <Container>
        <List>
        <AiFillHome size={25}  marginright='20px'/>

        <Link to="/doctor/home"  bg="dark" variant="dark"  style={{color:"#03071e"}}>Home</Link>

        </List>
        </Container>


            <Container >

<List>
  <div  className="d-flex justify-content-start">

<AiFillReconciliation size={25}/>

  <Link to="/doctor/addappointment" className="nav-link" style={{color:"#03071e"}}>Appointments</Link>
  </div>

</List>
</Container>

<Container >

<List>
  <div  className="d-flex justify-content-start">

<GrLocation size={25}/>

  <Link to="/doctor/location" className="nav-link" style={{color:"#03071e"}}>Location</Link>
  </div>

</List>
</Container>





        

        <Container >

        <List>
          <div  className="d-flex justify-content-start">
        <AiTwotoneShopping size={25}/>
         
                  <Link to="/doctor/report" className="nav-link" style={{color:"#03071e"}}>Reports</Link>
                  </div>

        </List>
       
        </Container>
        
        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <MdNotifications size={25}/>
         
                  <Link to="/doctor/notifications" className="nav-link" style={{color:"#03071e"}}>Notifications</Link>
                  </div>

        </List>
       
        </Container>


        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <RiInboxArchiveLine size={25}/>
         
                  <Link to="/doctor/chat" className="nav-link" style={{color:"#03071e"}}>Chat</Link>
                  </div>

        </List>
       
        </Container>

        <Container >

        <List>
          <div  className="d-flex justify-content-start">
        <RiAccountPinBoxLine size={25} />
          <Link to="/doctor/account" className="nav-link" style={{color:"#03071e"}}>Account</Link>
          </div>

        </List>
        </Container>
        <Divider />
        <Container>
        <List>
          <div  className="d-flex justify-content-start">
        <GoSignOut size={25}/>
          
                    <Link to="/doctor/login" className="nav-link" style={{color:"#03071e"}}>Log out</Link>
                    </div>
                  

        </List>
      
        </Container>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      
        
      </main>
      </div>
    </div>
  );
}