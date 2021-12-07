import { createStore, combineReducers } from "redux";
import cartReducer from "reducers/cartReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const mainReducer = combineReducers({
  cart: cartReducer
});

const commonData = {
  cart: {
    items: [],
    count: 0
  }
}
// const store = createStore(mainReducer, commonData, composeWithDevTools());;
const store = createStore(mainReducer, commonData);
export default store;
