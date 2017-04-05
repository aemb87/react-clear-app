import expect from 'expect';
import * as actions from 'actions/todoActions';
import * as actionTypes from 'constants/actionTypes';


describe('Todo action creator', function() {

    it('should return the correct action type when calling addTodo', () => {
      const addTodoAction = {
        type: actionTypes.ADD_TODO,
        id: 1,
        name: '',
        listId: 10
      };

      expect(actions.addTodo('', 10)).toEqual(addTodoAction);
    });

    it('should return the correct action type when calling updateTodo', () => {
      const updateTodoAction = {
        type: actionTypes.UPDATE_TODO,
        id: 1,
        name: 'test'
      };

      expect(actions.updateTodo(1, 'test')).toEqual(updateTodoAction);
    });

    it('should return the correct action type when calling completeTodo', () => {
      const completeTodoAction = {
        type: actionTypes.COMPLETE_TODO,
        id: 1
      };

      expect(actions.completeTodo(1)).toEqual(completeTodoAction);
    });

    it('should return the correct action type when calling deleteTodo', () => {
      const deleteTodoAction = {
        type: actionTypes.DELETE_TODO,
        id: 1
      };

      expect(actions.deleteTodo(1)).toEqual(deleteTodoAction);
    });

});
