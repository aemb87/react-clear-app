import { createStore } from 'redux';
import Immutable from 'immutable';
import ListReducer from './ListReducer';

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

const initialState = Immutable.Map(Immutable.fromJS({
	lists: [],
	todos: []
}));

const Store = createStore(
	ListReducer, 
	initialState, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;