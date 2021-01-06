import { ADD_TIMES, DEL_TIMES } from "../actionTypes";

export default (state =0  , action)=> {
  switch (action.type) {
    case ADD_TIMES: 
      return state+1;
    
    case DEL_TIMES: 
      return state-1
    
    default:
      return state;
  }
}