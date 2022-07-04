import { reducer as Authreducer } from "./AuthReducer/reducer";
import { reducer as Appreducer} from "./AppReducer/reducer"
import thunk from 'redux-thunk'
import {applyMiddleware, legacy_createStore, combineReducers} from 'redux'
// NOTE: use this store variable to create a store.
const rootreducer = combineReducers({Authreducer,Appreducer})
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
