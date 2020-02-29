import axios from "axios";

export default function setAutharizationToken(token){
    if(token){
        axios.defaults.headers.common['Autharization']=`Pankaj ${token}`;
    }else{
        delete axios.defaults.headers.common['Autharization'];
    }
}