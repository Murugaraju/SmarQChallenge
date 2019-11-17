import {createStore,combineReducers} from 'redux';

import LunchReducer from './store/reducers/LunchReducer';
import CartReducer from './store/reducers/CartReducer';


const rootReducer =combineReducers( {
    Lunch:LunchReducer,
    Cart: CartReducer
    
})

const store = createStore(rootReducer)


export default store;