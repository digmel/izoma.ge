import { combineReducers } from "redux";
import { routerReducer } from "./history";

// TODO: add each main reducer here
export default combineReducers({
  router: routerReducer,
});
