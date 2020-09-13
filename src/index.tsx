import "./apps/hello-world";
import "./apps/redux-app";
import "./apps/todo-app";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <Router basename={process.env.BASE_NAME}>
      <div>
        <ul>
          <li>
            <Link to="/">Hello, World</Link>
          </li>
          <li>
            <Link to="/todo">Emotion sample</Link>
          </li>
          <li>
            <Link to="/redux">Redux sample</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <hello-world />
          </Route>
          <Route path="/todo">
            <todo-app />
          </Route>
          <Route path="/redux">
            <redux-app />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
