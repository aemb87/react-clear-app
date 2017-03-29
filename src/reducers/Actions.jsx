import * as types from './ActionTypes';

/* LISTS */

let nextListId = 1;

export const addList 	  = name => ({ 
	type: types.ADD_LIST, 
	id: nextListId++,
	name: name
});
export const updateList   = (id, name) => ({ type: types.UPDATE_LIST, id, name});
export const completeList = id => ({ type: types.COMPLETE_LIST, id });
export const deleteList   = id => ({ type: types.DELETE_LIST, id });


/* TODOS */

let nextTodoId = 1;

export const addTodo 	  = (name, listId) => ({ 
	type: types.ADD_TODO, 
	id: nextTodoId++,
	name: name,
	listId: listId
});
export const updateTodo   = (id, name) => ({ type: types.UPDATE_TODO, id, name });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const deleteTodo   = id => ({ type: types.DELETE_ITEM, idList, idItem });