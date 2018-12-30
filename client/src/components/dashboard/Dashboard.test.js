import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Dashboard } from "./Dashboard";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const surveys = [
    {
      name: "Simple Survey",
      surveyId: 1,
      url: "/survey_results/1.json",
      participant_count: 6,
      response_rate: 0.8333333333333334,
      submitted_response_count: 5
    },
    {
      name: "Acme Engagement Survey",
      surveyId: 2,
      url: "/survey_results/2.json",
      participant_count: 271,
      response_rate: 1,
      submitted_response_count: 271
    }
  ];

  const props = {
    getSurveys: jest.fn(),
    surveys: { surveys: [...surveys], loading: false }
  };

  const enzymeWrapper = shallow(<Dashboard {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("<Dashboard >", () => {
  it("should render itself", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div").hasClass("dashboard")).toBe(true);
  });
});
