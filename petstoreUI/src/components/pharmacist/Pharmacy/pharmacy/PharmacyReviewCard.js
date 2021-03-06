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
import Modal from '@material-ui/core/Modal';
import {publicFolderUrl} from '../../../../config/utilities'

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

export default function PharmacyReviewCard({pharmacysData}) {
  // const [isPreviewShown, setPreviewShown] = useState(false);
  // pharmacysData.name,
  // pharmacysData.description
  console.log(pharmacysData)

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



return (
  // <Modal    open={open}
  // onClose={handleClose}
  // aria-labelledby="simple-modal-title"
  // aria-describedby="simple-modal-description">
    <Card className={classes.root}>
      <CardHeader
       
        title= {pharmacysData.name}
        subheader={pharmacysData.createdAt}
      />
     <CardMedia
        className={classes.media}
        // image="/static/images/cards/paella.jpg"
        image={publicFolderUrl+'/'+pharmacysData.photo}

        title="Paella dish"
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {pharmacysData.name}
        </Typography>
      </CardContent> */}
      <CardContent>
        <label>Price:</label>
        <Typography variant="body2" color="textSecondary" component="p">
          {pharmacysData.price}
        </Typography>
      </CardContent> 
        <CardContent>
          <label>Quantity</label>
        <Typography variant="body2" color="textSecondary" component="p">
          {pharmacysData.quantity}
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
          {pharmacysData.description}
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
 