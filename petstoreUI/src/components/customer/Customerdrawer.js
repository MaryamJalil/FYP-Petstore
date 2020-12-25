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


import { AiFillHome } from "react-icons/ai";
import { RiAccountPinBoxLine} from "react-icons/ri";
import {GoSignOut} from "react-icons/go";
import {AiFillDashboard} from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import {AiFillReconciliation} from "react-icons/ai";
import { RiInboxArchiveLine} from "react-icons/ri";
 import Image from 'react-bootstrap/Image';
 import carol from './img/carol.jpg';
 import {AiFillContainer} from "react-icons/ai";
 import {MdPets} from "react-icons/md";
 import {AiOutlineShoppingCart} from "react-icons/ai";
 import {AiFillMedicineBox} from "react-icons/ai";






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

export default function CustomerDrawer() {
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
        backgroundcolor="#ffffff"

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

        <div className={classes.drawerHeader}>
          <MenuIcon  onClick={handleDrawerClose}   style={{  backgroundcolor:"#ffffff"  }}/>
        </div>
        {/* dashboard color */}
        <div className="container-fluid" style={{backgroundColor:"#E1BEE7"}}>
        <List>
   
        <Image src={carol} roundedCircle style={{width:'100px', marginBottom:'10px',
        marginLeft:'55px',marginTop:"25px"}} />



        <Link to="/" className="navbar-brand"  bg="dark" variant="dark" 
        style={{color:"#212529" ,padding:'20px'}}>
        Customer</Link>

        </List>
        <Divider/>
        
        <Container>
        <List>
        <AiFillHome size={25}  style={{ marginRight:"10px"}}/>

        <Link to="/customer/home"  bg="dark" variant="dark"  
        style={{color:"#212529"}}>Home</Link>

        </List>
        </Container>
        <Container>
        <List>
        <AiOutlineShoppingCart size={25}  style={{ marginRight:"10px"}}/>

        <Link to="/customer/category"  bg="dark" variant="dark"  
        style={{color:"#212529"}}>Products</Link>

        </List>
        </Container>
       <Container>
        
        <List>
        <MdPets size={25} style={{ marginRight:"10px"}} />
        <Link to="/customer/pets"   bg="dark" variant="dark"  
        style={{color:"#212529"}}>Pets</Link>

        </List>
        </Container>
    


            <Container >

<List>
  <div  className="d-flex justify-content-start">

<AiFillReconciliation size={25}/>

  <Link to="/customer/takeappointment" className="nav-link"
   style={{color:"#212529"}}>Appointment</Link>
  </div>

</List>
</Container>

<Container >

<List>
  <div  className="d-flex justify-content-start">

<AiFillMedicineBox size={25}/>

  <Link to="/customer/pharmacy" className="nav-link" 
  style={{color:"#212529"}}>Pharmacy</Link>
  </div>

</List>
</Container>
<Container></Container>
        

        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <AiFillContainer size={25}/>
         
                  <Link to="/customer/portfolio" className="nav-link" 
                  style={{color:"#212529"}}>Pet Portfolio</Link>
                  </div>

        </List>
       
        </Container>

        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <RiInboxArchiveLine size={25}/>
         
                  <Link to="/customer/chat" className="nav-link" 
                  style={{color:"#212529"}}>Chat</Link>
                  </div>

        </List>
       
        </Container>

        <Container >

        <List>
          <div  className="d-flex justify-content-start">
        <RiAccountPinBoxLine size={25} />
          <Link to="/customer/account" className="nav-link" 
          style={{color:"#212529"}}>Account</Link>
          </div>

        </List>
        </Container>
        <Divider />
        <Container>
        <List>
          <div  className="d-flex justify-content-start">
        <GoSignOut size={25}/>
          
                    <Link to="/customer/login" className="nav-link" 
                    style={{color:"#212529"}}>Log out</Link>
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