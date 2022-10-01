
import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
import { reducer } from "./reducer";


const store=legacy_createStore(reducer);

export {store}