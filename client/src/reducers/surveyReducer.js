import { GET_SURVEY, SURVEY_LOADING } from "../actions/types";

const initialState = {
  survey: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SURVEY_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SURVEY:
      return {
        survey: action.payload.survey_result_detail,
        loading: false
      };
    default:
      return state;
  }
}
