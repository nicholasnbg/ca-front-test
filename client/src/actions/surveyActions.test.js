import { getSurvey, setSurveyLoading } from "./surveyActions";
import { GET_SURVEY, SURVEY_LOADING } from "../actions/types";

describe("Survey Actions", () => {
  it("returns SURVEY_LOADING ACTION", () => {
    expect(setSurveyLoading()).toEqual({
      type: SURVEY_LOADING
    });
  });
});
