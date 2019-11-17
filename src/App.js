import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from './containers/dashboard';
import OrderList from './components/orderlist'
   
function App() {
  return ( 
    <Switch>
      <Route path='/dashboard' exact><Dashboard/></Route>
      <Route path='/orderlist' exact component={OrderList}/>
      <Route path='*' exact render={()=><Redirect to='/dashboard'/>}></Route>
    </Switch> 
  );
}

export default App;
