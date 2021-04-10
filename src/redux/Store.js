import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { pizzaReducer } from "./pizzaHut/pizzaReducer";


let rootReducer = combineReducers({
    pizza : pizzaReducer
});

let store =  createStore(rootReducer, composeWithDevTools());


export { store };