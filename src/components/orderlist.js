import React, { Fragment } from 'react';
import NavBar from './navbarlayout'

import Card from '@material-ui/core/Card';
import {CardContent, Typography} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';


function OrderList(props){

console.log(props)



    return (
        <Fragment>
          <NavBar/>
          <Card raised style={{height: '266px',margin:'auto'}}>
                <CardContent>
                  
                    <Typography  variant='h5'>
                          <strong>Opps! Not implemented Sorry</strong> 
                    </Typography>
                    

                </CardContent>
                
                <CardActions  >
                  
                    <Button variant='contained'  color='primary' onClick={()=>props.history.goBack()}  >GoBack</Button>
                   
                    



                </CardActions>

                    
            </Card>      

        </Fragment>
    )
}


export default OrderList;