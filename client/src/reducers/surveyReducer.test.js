import surveyReducer from "./surveyReducer";
import { SURVEY_LOADING, GET_SURVEY } from "../actions/types";

describe("Survey Reducer", () => {
  it("has a default state", () => {
    expect(surveyReducer(undefined, { type: "unexpected" })).toEqual({
      survey: null,
      loading: false
    });
  });

  it("handles SURVEY_LOADING action type", () => {
    expect(surveyReducer(undefined, { type: SURVEY_LOADING })).toEqual({
      survey: null,
      loading: true
    });
  });

  it("handles GET_SURVEY action type", () => {
    const data = {
      survey_results_detail: {
        survey_name: "test survey"
      }
    };
    expect(
      surveyReducer(undefined, {
        type: GET_SURVEY,
        payload: { survey_result_detail: { data: data } }
      })
    ).toEqual({
      survey: { data: data },
      loading: false
    });
  });
});
