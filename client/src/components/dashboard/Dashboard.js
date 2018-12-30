import React, { Component } from "react";
import { connect } from "react-redux";
import { getSurveys } from "../../actions/surveysActions";
import PropTypes from "prop-types";

// Component Imports
import DashboardHeader from "./DashboardHeader";
import SurveyCard from "./SurveyCard";
import Spinner from "../Spinner";

export class Dashboard extends Component {
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
        surveys &&
        surveys.map((survey, i) => <SurveyCard key={i} surveyInfo={survey} />);
    }
    return (
      <div className="dashboard">
        <DashboardHeader />
        {dashboardContent}
      </div>
    );
  }
}

Dashboard.propTypes = {
  getSurveys: PropTypes.func.isRequired,
  surveys: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  surveys: state.surveys
});

export default connect(
  mapStateToProps,
  { getSurveys }
)(Dashboard);
