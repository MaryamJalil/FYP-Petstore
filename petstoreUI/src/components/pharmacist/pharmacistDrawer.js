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
import { AiOutlineShoppingCart} from "react-icons/ai";
import {GoSignOut} from "react-icons/go";
import {AiFillDashboard} from "react-icons/ai";

import Container from 'react-bootstrap/Container';
import {AiFillMedicineBox} from "react-icons/ai";
import { RiInboxArchiveLine} from "react-icons/ri";
import {AiOutlineProfile} from "react-icons/ai";
import Image from "react-bootstrap/Image";
import profilepic from "./img/profilepic.jpg";
import {AiOutlineStock} from "react-icons/ai";




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

export default function PharmacistDrawer() {
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
    <div className={classes.root} >
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
        <div className="container-fluid" style={{backgroundColor:"#a0c4ff"}}>
        <List >
        <Image src={profilepic} roundedCircle style={{width:'100px', flexDirection:'row',marginLeft:'45px',marginTop:"30px",
      marginBottom:"30px"}} />



        </List>
        <Divider/>
        <Container>
        
        <List>
        <AiFillDashboard size={25} />

        <Link to="/pharmacist"   bg="dark" variant="dark"  style={{color:"#212529",marginTop:"55px"}}>Pharmacist Dashboard</Link>

        </List>
        </Container>
        
        <Container>
        <List>
        <AiFillHome size={25}  marginright='20px'/>

        <Link to="/pharmacist/home"  bg="dark" variant="dark"  style={{color:"#212529"}}>Home</Link>

        </List>
        </Container>

        {/* <NavItem eventKey="Products">
                <NavIcon>
                    <i className="fa fa-database" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                   Products
                </NavText>
            </NavItem> */}

            <Container >

<List>
  <div  className="d-flex justify-content-start">

<AiFillMedicineBox size={25}/>

  <Link to="/pharmacist/pharmacy" className="nav-link" style={{color:"#212529"}}>Pharmacy</Link>
  </div>

</List>
</Container>
<Container>

<List>
  <div  className="d-flex justify-content-start">
<AiOutlineStock size={25}/>
 
          <Link to="/pharmacist/inventory" className="nav-link" style={{color:"#212529"}}>Inventory</Link>
          </div>

</List>

</Container>


 
        <Container >

        <List>
          <div  className="d-flex justify-content-start">
        <AiOutlineShoppingCart size={25} />
          <Link to="/pharmacist/orders" className="nav-link" style={{color:"#212529"}}>Orders</Link>
          </div>

        </List>
        </Container>

        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <AiTwotoneShopping size={25}/>
         
                  <Link to="/pharmacist/reports" className="nav-link" style={{color:"#212529"}}>Reports</Link>
                  </div>

        </List>
       
        </Container>


         <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <RiInboxArchiveLine size={25}/>
         
                  <Link to="/pharmacist/chat" className="nav-link" style={{color:"#212529"}}>Chat</Link>
                  </div>

        </List>
       
        </Container> 
        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <AiOutlineProfile size={25}/>
         
                  <Link to="/pharmacist/userprofile" className="nav-link" style={{color:"#212529"}}>User Profile</Link>
                  </div>

        </List>
       
        </Container>
        <Divider  />
        <Container >

        <List >
          <div  className="d-flex justify-content-start" style={{marginTop:"15px",marginBottom:"15px"}}>
        <GoSignOut size={25} />
          
                    <Link to="/pharmacist/login" className="nav-link" style={{color:"#212529"}}>Log out</Link>
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
  );
}