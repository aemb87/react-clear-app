import Immutable from 'immutable';

import { ADD_LIST, UPDATE_LIST, DELETE_LIST } from './ActionTypes';

const ListReducer = (state = Immutable.Map(), action) => {
	switch (action.type) {
		case ADD_LIST:
			
			const item = Immutable.Map({
				id: action.id,
				name: action.name,
				children: []
			});

			return state.setIn(['lists', state.get('lists').size], item);

		case UPDATE_LIST:
			
			const updateIdx = state.get('lists').findIndex(function(item){
				return item.get("id") === action.id;
			});

			return state.setIn(['lists', updateIdx, 'name'], action.name);

		case DELETE_LIST:

			const deleteIdx = state.get('lists').findIndex(function(item) {
				return item.get("id") === action.id;
			});

			return state.get('lists').delete(deleteIdx);

		default:
			return state;
	}	
};

export default ListReducer;