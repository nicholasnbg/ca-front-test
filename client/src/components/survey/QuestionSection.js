import React, { Component } from "react";
import Collapsible from "react-collapsible";
import Question from "./Question";

export default class QuestionSection extends Component {
  render() {
    const { theme } = this.props;
    return (
      <Collapsible
        trigger={
          <React.Fragment>
            <i className="fas fa-caret-right" />
            <p>{theme.name}</p>
            <p>Avg.</p>
          </React.Fragment>
        }
      >
        {theme.questions.map(q => (
          <Question question={q} />
        ))}
      </Collapsible>
    );
  }
}
