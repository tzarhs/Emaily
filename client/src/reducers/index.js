import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducers from "./authReducers";
import surveyReducer from "./surveyReducer";

export default combineReducers({
  //piece of state
  auth: authReducers,
  form: reduxForm,
  surveys: surveyReducer,
});
