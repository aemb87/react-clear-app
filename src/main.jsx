import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import MainView from './views/mainView';
import SubView from './views/subView';

import Store, { history } from './store/store';

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
