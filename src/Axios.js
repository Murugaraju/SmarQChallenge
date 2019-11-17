import axios from 'axios';


const oneinstanceaxios = axios.create({
    baseURL:"http://localhost:4300"
}) 


// oneinstanceaxios.defaults.headers['Authorization']="Simple one";



export default oneinstanceaxios;