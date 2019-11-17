import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


import Button from '@material-ui/core/Button'
import {NavLink}  from "react-router-dom";
   
const useStyles = makeStyles(theme => ({
  root: {      
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#e0e0e0',
    position:'fixed',
    left: 0,
   bottom: 0,
   width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function BottomNavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          
          <Typography variant="h6" className={classes.title}>
            <strong>SMARTQ</strong>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <strong>OveralQuantity: {props.quantity}</strong>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <strong>Overal Total: {props.total}</strong>
          </Typography>
          <Button component={NavLink} to={'orderlist'} variant="outlined" color='primary' style={{marginRight:'34px',borderRadius: '16px'}}>Checkout</Button>
      
    </div>
  );
}
