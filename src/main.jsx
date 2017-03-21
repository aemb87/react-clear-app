import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import MainView from './views/MainView';
import SubView from './views/SubView';

import Store from './reducers/Store';

const App = () => (
	<Provider store={Store}>
		<Router>
			<div id="wrapper">
	      		<Route exact path="/" component={MainView}/>
	      		<Route path="/(:listId)" component={SubView}/>
	      	</div>
	    </Router>
	</Provider>
)

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(
		React.createElement(App), 
		document.getElementById('mount')
	);
});