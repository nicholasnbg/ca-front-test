import { combineReducers } from "redux";
import surveyReducer from "./surveyReducer";
import surveysReducer from "./surveysReducer";

export default combineReducers({
  surveys: surveysReducer,
  survey: surveyReducer
});
