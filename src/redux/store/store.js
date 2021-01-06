import { createStore } from "redux";
import rootReducer from "../reducers"

const initValues = {
    times:0
}

const store = createStore( rootReducer,initValues)

export default store