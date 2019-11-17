import * as actionTypes from '../actions';


const initialState ={
    cartlist:[]
}

const lunchReducer= (state=initialState,action)=>{
      
    switch (action.type){
        case actionTypes.UPDATELIST:
            console.log('Hurray updating')
            return {
    
                ...state,
                cartlist:action.data
              
            }
       
        default:
            return initialState
    }


}

export default lunchReducer;