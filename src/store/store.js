import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'immutable';
import ListReducer from '../reducers/listReducer';
import TodoReducer from '../reducers/todoReducer';


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
