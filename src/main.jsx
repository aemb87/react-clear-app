import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import MainView from './views/MainView';
import SubView from './views/SubView';

import Store, { history } from './reducers/Store';

const App = () => (
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<div id="wrapper">
	      		<Route exact path="/" component={MainView}/>
	      		<Route path="/(:listId)" component={SubView}/>
	      	</div>
	    </ConnectedRouter>
	</Provider>
)

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(
		React.createElement(App), 
		document.getElementById('mount')
	);
});