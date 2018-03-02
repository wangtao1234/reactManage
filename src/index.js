import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from 'root/components/Home';
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={Home}>
      </Route>
    </Switch>
  </Router>
),document.getElementById("root"))


/** 热部署 */
if (module.hot) {
  module.hot.accept()
}
