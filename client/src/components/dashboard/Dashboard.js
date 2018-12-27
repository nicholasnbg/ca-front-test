import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getSurveys } from "../../actions/surveysActions";

import DashboardHeader from "./DashboardHeader";
import SurveyCard from "./SurveyCard";
import Spinner from "../Spinner";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getSurveys();
  }
  render() {
    const { loading, surveys } = this.props.surveys;
    let dashboardContent;

    if (loading) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent =
        surveys && surveys.map(survey => <SurveyCard surveyInfo={survey} />);
    }
    return (
      <div className="dashboard">
        <DashboardHeader />
        {dashboardContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys
});

export default connect(
  mapStateToProps,
  { getSurveys }
)(Dashboard);
