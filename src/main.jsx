import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainView from './views/MainView';
import SubView from './views/SubView';

const App = () => (
	<Router>
		<div id="wrapper">
      		<Route exact path="/" component={MainView}/>
      		<Route path="/about" component={SubView}/>
      	</div>
  </Router>
)

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(
		React.createElement(App), 
		document.getElementById('mount')
	);
});