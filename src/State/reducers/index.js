import { combineReducers } from "redux";
import amountReaducer from "./amountReducer";

export const reducers = combineReducers({
    amount : amountReaducer
})