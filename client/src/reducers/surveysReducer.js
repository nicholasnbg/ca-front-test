import { GET_SURVEYS, SURVEYS_LOADING } from "../actions/types";

const initialState = {
  surveys: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SURVEYS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SURVEYS:
      return {
        surveys: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
