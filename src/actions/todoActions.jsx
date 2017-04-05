import {
    ADD_TODO,
    UPDATE_TODO,
    COMPLETE_TODO,
    DELETE_TODO
} from '../constants/actionTypes';


let nextTodoId = 1;

export const addTodo      = (name, listId) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    name: name,
    listId: listId
});
export const updateTodo   = (id, name) => ({ type: UPDATE_TODO, id, name });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const deleteTodo   = id => ({ type: DELETE_TODO, id });
