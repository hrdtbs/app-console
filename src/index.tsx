import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ReactDOM from "react-dom";
import "./apps/todo-app";
import "./apps/hello-world"

const App =() =>  {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Hello, World</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <hello-world></hello-world>
          </Route>
          <Route path="/todo">
            <todo-app></todo-app>
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




ReactDOM.render(<App />, document.getElementById("app"));