import { combineReducers } from "redux";
import productsFeedReducer from "./ProductsFeed/productsFeedReducer";

export default combineReducers({
  products: productsFeedReducer
});
