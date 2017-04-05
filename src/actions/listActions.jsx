import {
    ADD_LIST,
    UPDATE_LIST,
    COMPLETE_LIST,
    DELETE_LIST
} from '../constants/actionTypes';


let nextListId = 1;

export const addList 	  = name => ({
	type: ADD_LIST,
	id: nextListId++,
	name: name
});
export const updateList   = (id, name) => ({ type: UPDATE_LIST, id, name});
export const completeList = id => ({ type: COMPLETE_LIST, id });
export const deleteList   = id => ({ type: DELETE_LIST, id });
