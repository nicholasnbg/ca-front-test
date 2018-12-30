import surveysReducer from "./surveysReducer";
import { SURVEYS_LOADING, GET_SURVEYS } from "../actions/types";

describe("Surveys Reducer", () => {
  it("has a default state", () => {
    expect(surveysReducer(undefined, { type: "unexpected type" })).toEqual({
      surveys: null,
      loading: false
    });
  });

  it("handles SURVEYS_LOADING action type", () => {
    expect(surveysReducer(undefined, { type: SURVEYS_LOADING })).toEqual({
      surveys: null,
      loading: true
    });
  });

  it("handles GET_SURVEYS action type", () => {
    const data = [{ name: "survey1" }, { name: "survey2" }];

    expect(
      surveysReducer(undefined, {
        type: GET_SURVEYS,
        payload: data
      })
    ).toEqual({
      loading: false,
      surveys: data
    });
  });
});
