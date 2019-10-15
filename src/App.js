import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import question1 from "./question/question1";
import todo from "./todo-list";

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <h1>ReactJS</h1>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/question1" className="navbar-item">
                  Question1
                </NavLink>
                <NavLink to="/todo-list" className="navbar-item">
                  Question2
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/question1" component={question1} />
          <Route path="/todo-list" component={todo} />
        </div>
      </div>
    );
  }
}

export default App;
