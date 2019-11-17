
import oneinstanceaxios from '../Axios';
import store from '../store';
import * as actionTypes from '../store/actions';
export const lunchGet = ()=>{
    console.log("Dashsbord get initiated",store.getState())
    store.dispatch({type:actionTypes.LUNCHDATALOADING})
    
    oneinstanceaxios.get('/api/lunch')
    .then(
       (result)=>{
           console.log("get call result",result)
           store.dispatch({type:actionTypes.LUNCHDATASUCCESS,data:result.data})
       }
    )
    .catch(
        (error)=>{
            console.log("error ------>",error,error.data)
            store.dispatch({type:actionTypes.LUNCHDATAFAILURE,errordata:error})
        }
    )   
return null;
}