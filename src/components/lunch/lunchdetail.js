import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {CardContent, Typography} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';






function LunchDetail(props){

    const [state,setState]= useState({quantity:0,total:0});

    const checkAvailability=(timeString=props.item.availabletime)=>{
      let a=timeString;
      const final=[]
      a=a.split(',')
      for(let i=0;i<2;i++){
        let b=a[i];
        b=b.split('-')
        for(let j=0;j<2;j++){
          let k=b[j].split(':')
//       console.log((parseInt(k[0])*60)+parseInt(k[1]))
      final.push((parseInt(k[0])*60)+parseInt(k[1]))
//       console.log(final)
        }
        
      }
       console.log(final)
      let currentTime= (new Date().getHours()*60)+(new Date().getMinutes())
      console.log(currentTime)
     
        if(currentTime>=final[0] && currentTime<=final[1]){
          return true
        }
      else if(currentTime>=final[2] && currentTime<=final[3]){
          return true
        }
      return false
      
      
      
      
    }
    
    const increaseQuant=()=>{

        var q= state.quantity+1
        var total=(q*props.item.price)
        setState({...state,quantity:q,total:total})
        props.updateData('Add',props.index,{...state,price:props.item.price})
    }
    const decreaseQuant=()=>{

        var q= state.quantity-1
        var total=state.total-props.item.price
        setState({...state,quantity:q,total:total})
        props.updateData('Remove',props.index,{...state,price:props.item.price})
    }



    return(
        <Grid item sm={12} lg={3} md={3} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
                <CardContent>
                    <Typography  variant='h4'>
                            {props.item.itemname.toUpperCase()}
                    </Typography>
                    <br/>
                    <Typography  variant='h5'>
                          <strong>Rs</strong>  {props.item.price}
                    </Typography>
                    

                </CardContent>
                {checkAvailability()? <CardActions  style={{direction:'rtl'}}>
                    <ButtonGroup size="small">
                    <Button  color='primary' onClick={()=>increaseQuant()}  ><AddIcon/></Button>
                    <Button disabled  >{state.quantity}</Button>
                    <Button color='secondary' disabled={state.quantity==0} onClick={()=>decreaseQuant()}><RemoveIcon/></Button>
                    </ButtonGroup>
                    



                </CardActions>:
                 <Typography style={{margin:'10px'}} variant='h7'>
                          <strong>Opps! not Available at this time </strong>
                    </Typography>
                    }
                

                {state.total==0?null:<Typography  variant='h5' >
                          <strong>Total:</strong>  {state.total}
                    </Typography>}
                    
            </Card>
             </Grid>
    )
}



export default LunchDetail;