import { addItem, updateItem, deleteItem } from './actions';

export default const TodoReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return state;
		case UPDATE_ITEM:
			return state;
		case DELETE_ITEM:
			return state;
		default:
			return state;
	}	
};