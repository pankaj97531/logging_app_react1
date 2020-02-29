import axios from "axios";
export default function createEvent(event){
    return dispatchEvent=>{
        return axios.post('http://localhost:8080/restapi/react_event_red_dice.php',event);
    }
} 