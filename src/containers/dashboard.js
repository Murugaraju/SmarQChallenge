import React,{Component,Fragment} from 'react';

import Lunch from '../components/lunch/lunch';
import { lunchGet} from '../apis/lunch_api';
import {connect} from 'react-redux';
import store from '../store'


class Dashboard extends Component
{
	constructor(props){
		super();
		
	}

componentDidMount(){
	console.log('asdfaasdfjasldfjlask',this.props.lunchData)
lunchGet()
}
componentDidUpdate(){
	console.log('did update',this.props)
}
 render(){      
         
 return(<Fragment>    
	
	<Lunch lunch={this.props.lunchData} cart={this.props.cart}/>
	
       


	</Fragment>)        	
  }
}
const mapStateToProps =(state)=>{
	console.log('main state',state,store.getState())
	return {lunchData:state.Lunch,
	cart:state.Cart,
	}
}
export default connect(mapStateToProps,null)( Dashboard);   