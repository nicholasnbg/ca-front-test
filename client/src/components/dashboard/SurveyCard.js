import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

// Component imports
import ResponseGauge from "../ResponseGauge";

export default class SurveyCard extends Component {
  render() {
    const { surveyInfo } = this.props;

    return (
      <Card className="survey-card">
        <Info>
          <SurveyName>{surveyInfo.name}</SurveyName>
          <Respondents>Responses: {surveyInfo.participant_count}</Respondents>
        </Info>
        <ResponseGauge
          responsePerc={Math.round(surveyInfo.response_rate * 100)}
        />
        <LinkWrapper>
          <Link
            className="reactLink"
            to={{
              pathname: surveyInfo.urls.survey
            }}
          >
            <ResultsLink>Results >></ResultsLink>
          </Link>
        </LinkWrapper>
      </Card>
    );
  }
}

SurveyCard.propTypes = {
  surveyInfo: PropTypes.object.isRequired
};

// Styled Components

const Card = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 0.5fr;
  grid-template-rows: 3fr;
  min-height: 200px;
  width: 100%;
  background: #ffffff;
  padding: 15px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    min-height: auto;
  }
`;

const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const SurveyName = styled.h2`
  margin-bottom: 0;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

const Respondents = styled.h4`
  margin-top: 10px;
  margin-left: 15px;
  color: #777;
`;

const ResultsLink = styled.h4`
  text-decoration: none;
  text-decoration-style: none;
  height: 100%;
  color: #777;
  margin-left: 5px;
`;

const LinkWrapper = styled.div`
  border-left: solid 1px #d5d5d5;
  margin: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
