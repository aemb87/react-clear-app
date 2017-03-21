import * as types from './ActionTypes';

let nextListId = 1;

export const addList 	= name => ({ 
	type: types.ADD_LIST, 
	id: nextListId++,
	name: name
});

export const updateList = (id, name) => ({ type: types.UPDATE_LIST, id, name });
export const deleteList = id => ({ type: types.DELETE_LIST, id });

export const addTodo 	= (idList, name) => ({ type: types.ADD_ITEM, idList, name });
export const updateTodo = (idList, idItem) => ({ type: types.UPDATE_ITEM, idList, idItem });
export const deleteTodo = (idList, idItem) => ({ type: types.DELETE_ITEM, idList, idItem });