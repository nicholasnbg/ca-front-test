import { combineReducers } from "redux";
import surveyReducer from "./surveyReducer";
import surveysReducer from "./surveyReducer";

export default combineReducers({
  surveys: surveysReducer,
  survey: surveyReducer
});
