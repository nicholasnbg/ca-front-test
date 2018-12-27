import { GET_SURVEY, SURVEY_LOADING } from "./types";
import axios from "axios";

export const getSurvey = surveyId => dispatch => {
  dispatch(setSurveyLoading());
  axios.get(`http://localhost:5000/survey/${surveyId}`).then(res => {
    dispatch({
      type: GET_SURVEY,
      payload: res.data
    });
  });
};

//Set loading to true
export const setSurveyLoading = () => {
  return {
    type: SURVEY_LOADING
  };
};
