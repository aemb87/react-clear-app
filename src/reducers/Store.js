import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'immutable';
import ListReducer from './ListReducer';
import TodoReducer from './TodoReducer';

// const testInitialState = [
// 	{name: 'lista1', children: ['item1.1', 'item1.2', 'item1.3']},
// 	{name: 'lista2', children: ['item2.1', 'item2.2', 'item2.3']},
// 	{name: 'lista3', children: ['item3.1', 'item4.2']},
// 	{name: 'lista4', children: ['item4.1']},
// 	{name: 'lista5', children: []},
// 	{name: 'lista6', children: []},
// 	{name: 'lista7', children: []},
// 	{name: 'lista8', children: []},
// ];

const reducers = combineReducers({
    lists: ListReducer,
    todos: TodoReducer,
    router: routerReducer
});

const history = createHistory();
const middleware = routerMiddleware(history);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const Store = createStore(
	reducers, 
	composeWithDevTools(applyMiddleware(middleware))
);

export default Store;
export { history };