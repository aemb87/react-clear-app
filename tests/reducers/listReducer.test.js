import Immutable from 'immutable';
import expect from 'expect';
import expectImmutable from 'expect-immutable';
import reducer from 'reducers/listReducer';
import * as actions from 'actions/listActions';


expect.extend(expectImmutable);

describe('List reducer', function() {

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
                completed: false
            })
        ]);

        const newState = reducer(undefined, actions.addList('test1'));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle subsequent ADD_LIST actions', function() {

        const oldState = reducer(Immutable.List(), actions.addList('test1'));

        const expectedState = Immutable.List([
            Immutable.Map({
                id: 3,
                name: 'test1',
                completed: false
            }),
            Immutable.Map({
                id: 4,
                name: 'test2',
                completed: false
            })
        ]);

        const newState = reducer(oldState, actions.addList('test2'));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle UPDATE_LIST', function() {

        const oldState = reducer(Immutable.List(), actions.addList('test'));

        const expectedState = Immutable.List([
            Immutable.Map({
                id: 5,
                name: 'test_modified',
                completed: false
            })
        ]);

        const newState = reducer(oldState, actions.updateList(5, 'test_modified'));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle COMPLETE_LIST', function() {

        const oldState = reducer(Immutable.List(), actions.addList('test'));

        const expectedState = Immutable.List([
            Immutable.Map({
                id: 6,
                name: 'test',
                completed: true
            })
        ]);

        const newState = reducer(oldState, actions.completeList(6));

        expect(expectedState).toEqualImmutable(newState);

    });

    it('should handle DELETE_LIST', function() {

        const oldState = reducer(Immutable.List(), actions.addList('test'));

        const expectedState = Immutable.List();

        const newState = reducer(oldState, actions.deleteList(7));

        expect(expectedState).toEqualImmutable(newState);

    });

});
