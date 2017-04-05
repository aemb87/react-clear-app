import Immutable from 'immutable';
import { ADD_TODO, UPDATE_TODO, COMPLETE_TODO, DELETE_TODO } from '../constants/actionTypes';

const TodoReducer = (state = Immutable.List(), action) => {
	switch (action.type) {
		case ADD_TODO:

			const item = Immutable.Map({
				id: action.id,
				name: action.name,
				completed: false,
				listId: action.listId
			});

			return state.set(state.size, item);

		case UPDATE_TODO:

			const updateIdx = state.findIndex(function(item){
				return item.get("id") === action.id;
			});

			return state.setIn([updateIdx, 'name'], action.name);

		case COMPLETE_TODO:

			const completeIdx = state.findIndex(function(item){
				return item.get("id") === action.id;
			});

			return state.setIn([completeIdx, 'completed'], true);

		case DELETE_TODO:

			const deleteIdx = state.findIndex(function(item) {
				return item.get("id") === action.id;
			});

			return state.delete(deleteIdx);

		default:
			return state;
	}
};

export default TodoReducer;
