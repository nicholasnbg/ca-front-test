import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { getSurvey } from "../../actions/surveyActions";

import Spinner from "../Spinner";
import SurveyInfo from "./SurveyInfo";
// import ThemeCard from "./ThemeCard";

class Survey extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSurvey(id);
  }

  render() {
    const { loading, survey } = this.props.survey;
    let surveyContent;
    console.log(survey);

    if (loading) {
      surveyContent = <Spinner />;
    } else {
      surveyContent = survey && (
        <div>
          <Link className="reactLink" to={{ pathname: `/` }}>
            <p>Back</p>
          </Link>
          <SurveyHeading>{survey.name} Results</SurveyHeading>
          <SurveyInfo
            participantCount={survey.participant_count}
            responseRate={survey.response_rate}
            responseCount={survey.submitted_response_count}
          />
        </div>
      );
    }

    return surveyContent;
  }
}

const mapStateToProps = state => ({
  survey: state.survey
});

export default connect(
  mapStateToProps,
  { getSurvey }
)(Survey);

const SurveyHeading = styled.h1`
  text-align: center;
`;
