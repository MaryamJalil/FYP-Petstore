import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {publicFolderUrl} from '../../../config/utilities'
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

export default function ProductReviewCard({productsData}) {
  // const [isPreviewShown, setPreviewShown] = useState(false);
  // productsData.name,
  // productsData.description
  console.log(productsData)

  const classes = useStyles();

  
  const [expanded, setExpanded] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  // function handleClose() {
  //   setOpen(false);
  // };

//   handlePreview=(e)=>{
//     e.preventDefault();

//     setPreviewShown(true); // Here we change state
// }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const [card, setCard] = useState({
  //   name: '',
  //   price: '',
  //   description: '',
  //   shipping: '',
  //   quantity: '',
  //   category:''

  // });
  // const handleChangeCard = e => {
  //   // setForm({ ...form, [e.target.name]: e.target.value });
  //   setCard({ [e.target.name]: e.target.value })


  // };
//   const onClickEvent= async (e)=>{
//     e.preventDefault();
//    await updateProducts(card);
    

// }
// const handleChangeValue=(e)=>{
//    setCard({...card, [e.target.name]:e.target.value})


// }

// // export default 
// const ProductReviewCard=()=>{

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };
//         if(form)
// if (isPreviewShown)
// if(card)

return (
  // <Modal    open={open}
  // onClose={handleClose}
  // aria-labelledby="simple-modal-title"
  // aria-describedby="simple-modal-description">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
             {productsData.photo}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {productsData.name}
        subheader={productsData.createdAt}
      />
      <CardMedia
        className={classes.media}
        // image="/static/images/cards/paella.jpg"
        image={publicFolderUrl+'/'+productsData.photo}

        title="Paella dish"
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productsData.name}
        </Typography>
      </CardContent> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productsData.price}
        </Typography>
      </CardContent> 
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productsData.quantity}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
      
          <Typography paragraph>
          {productsData.description}
          </Typography>
        
          {/* <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
    // </Modal>
)
  //  else
  //  return '';
     }
 