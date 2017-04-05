import Immutable from 'immutable';
import expect from 'expect';
import expectImmutable from 'expect-immutable';
import reducer from 'reducers/todoReducer';
import * as actions from 'actions/todoActions';


expect.extend(expectImmutable);

describe('Todo reducer', function() {

    it('should return the initial state', function() {
        const newState = reducer(undefined, {});
        const expectedState = Immutable.List();

        expect(newState).toEqualImmutable(expectedState);
    });

    it('should handle first ADD_LIST action', function() {
        const expectedState = Immutable.List([
            Immutable.Map({
                id: 2,
                name: 'test1',
                completed: false,
                listId: 1
            })
        ]);

        const newState = reducer(undefined, actions.addTodo('test1', 1));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle subsequent ADD_LIST actions', function() {

        const oldState = reducer(Immutable.List(), actions.addTodo('test1', 1));

        const expectedState = Immutable.List([
            Immutable.Map({
                id: 3,
                name: 'test1',
                completed: false,
                listId: 1
            }),
            Immutable.Map({
                id: 4,
                name: 'test2',
                completed: false,
                listId: 2
            })
        ]);

        const newState = reducer(oldState, actions.addTodo('test2', 2));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle UPDATE_LIST', function() {

        const oldState = reducer(Immutable.List(), actions.addTodo('test', 1));

        const expectedState = Immutable.List([
            Immutable.Map({
                id: 5,
                name: 'test_modified',
                completed: false,
                listId: 1
            })
        ]);

        const newState = reducer(oldState, actions.updateTodo(5, 'test_modified'));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle COMPLETE_LIST', function() {

        const oldState = reducer(Immutable.List(), actions.addTodo('test', 1));

        const expectedState = Immutable.List([
            Immutable.Map({
                id: 6,
                name: 'test',
                completed: true,
                listId: 1
            })
        ]);

        const newState = reducer(oldState, actions.completeTodo(6));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle DELETE_LIST', function() {

        const oldState = reducer(Immutable.List(), actions.addTodo('test'));

        const expectedState = Immutable.List();

        const newState = reducer(oldState, actions.deleteTodo(7));

        expect(expectedState).toEqualImmutable(newState);

    });

});
