import axios from 'axios';

const url="https://react-bog-app-backend.herokuapp.com/api/home";

const fetchData=async()=>{
    try{
        const response=await axios.get(url);
        return response.data;

    }
    catch(error){}
};
export default fetchData;