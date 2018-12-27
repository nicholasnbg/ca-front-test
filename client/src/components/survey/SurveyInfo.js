import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Component Imports
import ResponseGauge from "../ResponseGauge";

export default function SurveyInfo({
  participantCount,
  responseRate,
  responseCount
}) {
  return (
    <InfoWrapper>
      <InfoText>
        <Span>
          <InfoEm>Participant Count</InfoEm>{" "}
        </Span>
        <Span>
          <InfoRes>{participantCount}</InfoRes>
        </Span>
      </InfoText>
      <InfoText>
        <Span>
          <InfoEm>Response Count</InfoEm>
        </Span>
        <Span>
          <InfoRes>{responseCount}</InfoRes>
        </Span>
      </InfoText>
      <Span>
        <ResponseGauge responsePerc={Math.round(responseRate * 100)} />
      </Span>
    </InfoWrapper>
  );
}

SurveyInfo.propTypes = {
  participantCount: PropTypes.number.isRequired,
  responseRate: PropTypes.number.isRequired,
  responseCount: PropTypes.number.isRequired
};

// Styled Components

const InfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 2fr;
  padding-bottom: 30px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InfoEm = styled.p`
  margin: 0.5em 0;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;
  text-align: center;
`;

const InfoRes = styled.p`
  margin: 0.5em 0;
  font-size: 2.5rem;
  padding-left: 10px;
  font-weight: 400;
  color: #777;
  text-align: center;
  margin: auto;
`;

const Span = styled.div`
  display: flex;
  align-items: center;
  display: inline-block;
`;
