import { combineReducers } from "redux";
import authReducers from "./authReducers";

export default combineReducers({
  //piece of state
  auth: authReducers,
});
