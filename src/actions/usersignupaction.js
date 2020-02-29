import axios from "axios";

export function userSignUpRequest(userData){
//    console.log("userSignUpRequest");
    return dispatchEvent=>{
        return axios.post('http://localhost:8080/restapi/react_red_dice.php',userData);
    }
}

export function isUserExists(identifier){
  //  console.log(identifier);
    return dispatchEvent=>{
        return axios.get(`http://localhost:8080/restapi/react_red_dice.php/?getdata=${identifier}`);
    }
}