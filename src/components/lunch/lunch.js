import React, { useState, Fragment, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {CardContent} from '@material-ui/core';

import ContentLoader from 'react-content-loader';
import NavBar from '../navbarlayout'
import LunchDetail from './lunchdetail';
import BottomNavBar from '../bottomnavbar';


function Lunch(props){
    // console.log('props printing',props)
    let data=[];

    
    const [state,setState]=useState({q:0,t:0,temp:[]})
    console.log('printing state in lunch',state)

    useEffect(()=>{
        setState({...state,temp:[...props.lunch.lunchdata]})

    },[])
    const updateList = (operation,index,data)=>{
      
        
        if(operation=='Add'){
            setState({...state, q:(state.q)+1,t:(state.t)+data.price,})
        }
       else if(operation=='Remove'){
        setState({...state, q:(state.q)-1,t:(state.t)-data.price})

       }
        
      
    }
    if(props.lunch.loading){

        
        for(let i=0;i<4;i++){
            data.push(
                <Grid item sm={12} lg={3} md={3} style={{padding:'13px'}}  key={i}>
            <Card raised style={{height: '266px'}}>
                <CardContent>
                    <ContentLoader 
                        height={160}
                        width={400}
                        speed={2}
                        primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb"
                    >
                        
                        <rect x="25" y="15" rx="5" ry="5" width="220" height="20" /> 
                        
                        <rect x="25" y="45" rx="5" ry="5" width="220" height="20" /> 
                        
                        <rect x="25" y="75" rx="5" ry="5" width="220" height="20" /> 
                        
                        <rect x="25" y="105" rx="5" ry="5" width="220" height="20" />
                    </ContentLoader>
                </CardContent>
               
            </Card>
             </Grid>
            )
        }
    }

    else if (props.lunch!=undefined && props.lunch.lunchdata.length!=0)
    {
        data=[]
        
        for(let i=0;i<props.lunch.lunchdata.length;i++){
            data.push(
        <LunchDetail updateData={(operation,index,data)=>updateList(operation,index,data)} index={i} key={i} item={props.lunch.lunchdata[i]} />
            )
            
        }


    }
    
return (
    <Fragment>
    <NavBar cartcount={state.q} show/>
	<Grid container style={{marigin:'auto'}}>
	{data}

    <BottomNavBar quantity={state.q} total={state.t}/>  

	</Grid>
    </Fragment>)
}
 

export default (Lunch);