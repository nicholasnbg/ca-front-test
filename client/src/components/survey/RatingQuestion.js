import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { responseColors } from "../colors";

export default class RatingQuestion extends Component {
  state = {
    counts: null,
    average: null,
    avgColor: null
  };

  componentDidMount() {
    const [counts, average] = generateData(
      this.props.question.survey_responses
    );
    const avgColor = responseColors[Math.floor(average === 5 ? 4.9 : average)];
    this.setState({
      counts,
      average,
      avgColor
    });
  }

  render() {
    const { question } = this.props;
    const { description } = question;
    const { average, avgColor } = this.state;

    return (
      <QuestionWrapper>
        <Description>{description}</Description>
        <Average color={avgColor}>{Math.round(average * 10) / 10}</Average>
      </QuestionWrapper>
    );
  }
}

RatingQuestion.propTypes = {
  question: PropTypes.object.isRequired
};

const generateData = responses => {
  const counts = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  };

  responses.forEach(r => {
    // tally counts of responses that are a number
    if (parseInt(r.response_content) >= 0) {
      counts[r.response_content] += 1;
    }
  });

  const allScores = responses
    .map(r => parseInt(r.response_content))
    .filter(r => r >= 0);

  const average = allScores.reduce((a, b) => a + b) / allScores.length;

  return [counts, average];
};

// Styled Components

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 1.2em;
  max-width: 80%;
  padding-left: 20px;
  @media (max-width: 700px) {
    font-size: 1em;
    padding-right: 5%;
  }
`;

const Average = styled.p`
  font-size: 2em;
  color: ${props => props.color};
  padding-right: 20px;
`;
