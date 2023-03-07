import {combineReducers} from "redux";
import {starWarReducers} from "./starWarReducers";


export const rootReducer = combineReducers({
    star: starWarReducers,
})