

// import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
// import { reducer } from "./reducer";


// const store=legacy_createStore(reducer);

// export {store}

import { applyMiddleware, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./app/reducer"


export const store = legacy_createStore(reducer,applyMiddleware(thunk))

