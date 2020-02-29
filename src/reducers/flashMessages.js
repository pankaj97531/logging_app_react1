import shortid from 'shortid';
import { ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE } from '../actions/types'
import findIndex from 'lodash/findIndex';
export default (state=[],action={})=>{
    switch(action.type){
        case  ADD_FLASH_MESSAGE :
            return [
                ...state,
                {
                    id : shortid.generate(),
                    type : action.message.type,
                    text : action.message.text
                }
            ] ; 
        case DELETE_FLASH_MESSAGE :    
        const getid=findIndex(state,{id:action.id});
        if(getid>=0){
            return[
                ...state.slice(0,getid),
                ...state.slice(getid+1)
            ]
        }
        return state;

        default :
        return state;
    }
}