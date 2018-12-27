import { GET_SURVEYS, SURVEYS_LOADING } from "./types";
import axios from "axios";

export const getSurveys = () => dispatch => {
  dispatch(setSurveysLoading());
  axios.get("/").then(res => {
    dispatch({
      type: GET_SURVEYS,
      payload: res.data.survey_results
    });
  });
};

//Set loading to true
export const setSurveysLoading = () => {
  return {
    type: SURVEYS_LOADING
  };
};
