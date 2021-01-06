import { ADD_TIMES, DEL_TIMES } from "../actionTypes";

export default {
    increment: (times)=>{
        return {
            type: ADD_TIMES,
            // times
        }
    },
    decrement: (times)=>{
        return {
            type: DEL_TIMES,
            // times
        }
    }
}