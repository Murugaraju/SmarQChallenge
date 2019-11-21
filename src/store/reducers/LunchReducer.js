import * as actionTypes from '../actions';


const initialState ={
    loading:false,
    lunchdata:[],
    error:{isError:false,errorData:undefined}
}

const lunchReducer= (state=initialState,action)=>{
      console.log('action --->',action)
    switch (action.type){
        case actionTypes.LUNCHDATALOADING:
            return {
    
                ...state,
                loading:true
              
            }
        case actionTypes.LUNCHDATASUCCESS:
        console.log("In dashboard api succes ",action)
            
            return {
                ...state,
                loading:false,
                lunchdata:action.data,
                
            }
        case actionTypes.LUNCHDATAFAILURE:
            return {
                ...state,
                loading:false,
                error:{isError:true,
                    errorData:action.errordata
                
                
                }

            }
        default:
            return state;
    }
    

}

export default lunchReducer;
