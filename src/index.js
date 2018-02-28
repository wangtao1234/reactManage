import React from 'react';
import ReactDOM from 'react-dom';




ReactDOM.render(
  <h3>Hello world</h3>,
  document.getElementById('root')
)















/** 热部署 */
if (module.hot) {
  module.hot.accept()
}
