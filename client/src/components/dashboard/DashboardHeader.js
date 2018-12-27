import React from "react";
import styled from "styled-components";

export default function DashboardHeader() {
  return (
    <Row>
      <ColText>Survey Details</ColText>
      <ColText>Response Rate</ColText>
    </Row>
  );
}

const Row = styled.div`
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #d5d5d5;
  padding: 10px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 0.5fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr 0.5fr;
  }
`;

const ColText = styled.em`
  padding-left: 25px;
`;
