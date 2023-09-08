import {applyMiddleware, combineReducers,compose,createStore } from "redux";
import thunk from "redux-thunk";
import cReducer from "./features/Counter/reducer";

let rootReducers =  combineReducers({
    counter: cReducer
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;