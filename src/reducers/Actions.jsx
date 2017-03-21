import * as types from './ActionTypes';

let nextListId = 1;

export const addList 	  = name => ({ 
	type: types.ADD_LIST, 
	id: nextListId++,
	name: name
});

export const updateList   = (id, name) => ({ type: types.UPDATE_LIST, id, name});
export const completeList = id => ({ type: types.COMPLETE_LIST, id });
export const deleteList   = id => ({ type: types.DELETE_LIST, id });

export const addTodo 	  = (idList, name) => ({ type: types.ADD_TODO, idList, name });
export const updateTodo   = (id, name) => ({ type: types.UPDATE_TODO, id, name });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const deleteTodo   = id => ({ type: types.DELETE_ITEM, idList, idItem });