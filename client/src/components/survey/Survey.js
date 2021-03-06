import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getSurvey } from "../../actions/surveyActions";

// Component imports
import Spinner from "../Spinner";
import SurveyInfo from "./SurveyInfo";
import QuestionSection from "./QuestionSection";

class Survey extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSurvey(id);
  }

  render() {
    const { loading, survey } = this.props.survey;
    let surveyContent;

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
          {survey.themes.map((theme, i) => (
            <QuestionSection key={i} theme={theme} />
          ))}
        </div>
      );
    }

    return surveyContent;
  }
}

Survey.propTypes = {
  getSurvey: PropTypes.func.isRequired,
  survey: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  survey: state.survey
});

export default connect(
  mapStateToProps,
  { getSurvey }
)(Survey);

// Styled Components

const SurveyHeading = styled.h1`
  text-align: center;
`;
