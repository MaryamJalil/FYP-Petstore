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
import {GoDatabase} from "react-icons/go";
import { RiInboxArchiveLine} from "react-icons/ri";
import {AiOutlineProfile} from "react-icons/ai";
import Image from "react-bootstrap/Image";
import marc from "./img/marc.jpg";
import {AiOutlineStock} from "react-icons/ai";
import {MdPets} from "react-icons/md"




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
    backgroundcolor: '#FF8A80'
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

export default function ShopkeeperDrawer() {
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

            <MenuIcon      />
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
        //  backgroundcolor: '#FF8A80'
        }}
      >

        <div className={classes.drawerHeader} >
          <MenuIcon  onClick={handleDrawerClose}   style={{  backgroundcolor:"#ffffff"  }}/>
        </div>
        
        <div className="container-fluid" >
        <List>
        {/* <AiFillHome size={25} /> */}
        <Image src={marc} roundedCircle style={{width:'100px', flexDirection:'row',marginLeft:'45px',marginTop:"30px"
      ,marginBottom:"10px"}} />


        {/* <Link to="/" className="navbar-brand"  bg="dark" variant="dark" style={{color:"#6d6d6d" ,padding:'15px'}}>
          Seller</Link> */}

        </List>
        <Divider/>
        <Container>
        
        <List>
        <AiFillDashboard size={25} />

        <Link to="/seller"   bg="dark" variant="dark"  style={{color:"#6d6d6d"}}>Seller Dashboard</Link>

        </List>
        </Container>
        
        <Container>
        <List>
        <AiFillHome size={25}  marginright='20px'/>

        <Link to="/seller/home"  bg="dark" variant="dark"  style={{color:"#6d6d6d"}}>Home</Link>
    
        </List>
        </Container>
{/* 
        <NavItem eventKey="Products">
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

<GoDatabase size={25}/>

  <Link to="/seller/category" className="nav-link" style={{color:"#6d6d6d"}}>Products</Link>
  </div>

</List>
</Container>
{/* <Container>

<List>
  <div  className="d-flex justify-content-start">
<AiOutlineStock size={25}/>
 
          <Link to="/seller/stock" className="nav-link" style={{color:"#6d6d6d"}}>Inventory</Link>
          </div>

</List>

</Container> */}
{/* <Container>

<List>
  <div  className="d-flex justify-content-start">
<MdPets size={25}/>
 
          <Link to="/seller/pets" className="nav-link" style={{color:"#6d6d6d"}}>Pets</Link>
          </div>

</List>

</Container> */}


        <Container >

        <List>
          <div  className="d-flex justify-content-start">
        <AiOutlineShoppingCart size={25} />
          <Link to="/seller/orders" className="nav-link" style={{color:"#6d6d6d"}}>Orders</Link>
          </div>

        </List>
        </Container>

        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <AiTwotoneShopping size={25}/>
         
                  <Link to="/seller/reports" className="nav-link" style={{color:"#6d6d6d"}}>Reports</Link>
                  </div>

        </List>
       
        </Container>


        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <RiInboxArchiveLine size={25}/>
         
                  <Link to="/seller/chat" className="nav-link" style={{color:"#6d6d6d"}}>Chat</Link>
                  </div>

        </List>
       
        </Container>
        <Container>

        <List>
          <div  className="d-flex justify-content-start">
        <AiOutlineProfile size={25}/>
         
                  <Link to="/seller/userprofile" className="nav-link" style={{color:"#6d6d6d"}}>User Profile</Link>
                  </div>

        </List>
       
        </Container>
        <Divider />
        <Container>
        <List>
          <div  className="d-flex justify-content-start"  >
        <GoSignOut size={25}/>
          
 <Link to="/seller/login" className="nav-link" style={{color:"#6d6d6d"}}>Log out</Link>
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