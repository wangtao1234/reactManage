import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

ReactDOM.render((
  Router>
  <Route path="/" component={HomeLayOut}>
  </Route>
</Router>
),doccument.getElementById("root"))


/** 热部署 */
if (module.hot) {
  module.hot.accept()
}
