import Immutable from 'immutable';
import { ADD_LIST, UPDATE_LIST, COMPLETE_LIST, DELETE_LIST } from './ActionTypes';

const ListReducer = (state = Immutable.List(), action) => {
	switch (action.type) {
		case ADD_LIST:
			
			const item = Immutable.Map({
				id: action.id,
				name: action.name,
				completed: false
			});

			return state.set(state.size, item);

		case UPDATE_LIST:
			
			const updateIdx = state.findIndex(function(item){
				return item.get("id") === action.id;
			});

			return state.setIn([updateIdx, 'name'], action.name);

		case COMPLETE_LIST:
			
			const completeIdx = state.findIndex(function(item){
				return item.get("id") === action.id;
			});

			return state.setIn([completeIdx, 'completed'], true);

		case DELETE_LIST:

			const deleteIdx = state.findIndex(function(item) {
				return item.get("id") === action.id;
			});

			return state.delete(deleteIdx);

		default:
			return state;
	}	
};

export default ListReducer;