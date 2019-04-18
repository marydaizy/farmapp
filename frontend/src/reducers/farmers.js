import { GET_FARMERS, DELETE_FARMER, POST_FARMER } from "../actions/types.js";
const initialState = {
   
    farmers: []
}
export default function(state = initialState, action) {
    switch(action.type){
        case GET_FARMERS:
        return{
            ...state,
            farmers: action.payload
        };  
    default:
    return state;
    }
}