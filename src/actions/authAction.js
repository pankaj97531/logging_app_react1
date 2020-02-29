import axios from "axios";
import setAutharizationToken from "../utils/setAutharizationToken";
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../actions/types';

export function setCurreentUser(user){
    return{
        type : SET_CURRENT_USER,
        user
    }
}
export function logout(){
    return dispatchEvent=>{
        localStorage.removeItem("jwtToken");
        setAutharizationToken(false);
        dispatchEvent(setCurreentUser({}));
    }
}

export function login(logindata){
    return dispatchEvent=>{
        return axios.post('http://localhost:8080/restapi/react_login_red_dice.php',logindata).then((res)=>{
     //   console.log(res.data);
        const token= res.data.jwt;
        localStorage.setItem('jwtToken',token);
        setAutharizationToken(token);
        dispatchEvent(setCurreentUser(jwtDecode(token)));
//        console.log(jwt.decode(token));
        return token;
        });
    }
}
