import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";
import Survey from "./components/survey/Survey";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Container>
              <Route exact path="/" component={Dashboard} />
              <Route path="/survey/:id" component={Survey} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

const Container = styled.div`
  width: 70vw;
  margin: auto;
  padding: 20px 0;

  @media (max-width: 700px) {
    width: 95vw;
  }
`;
