import React, { Component } from "react";
import Collapsible from "react-collapsible";
import PropTypes from "prop-types";

// Component Imports
import RatingQuestion from "./RatingQuestion";

export default class QuestionSection extends Component {
  render() {
    const { theme } = this.props;
    return (
      // Trigger prop generates markup for theme card header, styling contained in src/App.css
      <Collapsible
        trigger={
          <React.Fragment>
            <i className="fas fa-caret-right" />
            <p>{theme.name}</p>
            <p>Avg.</p>
          </React.Fragment>
        }
      >
        {theme.questions.map((q, i) => (
          <RatingQuestion key={i} question={q} />
        ))}
      </Collapsible>
    );
  }
}

QuestionSection.propTypes = {
  theme: PropTypes.object.isRequired
};
