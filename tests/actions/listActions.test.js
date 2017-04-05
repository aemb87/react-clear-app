import expect from 'expect';
import * as actions from 'actions/listActions';
import * as actionTypes from 'constants/actionTypes';


describe('List action creator', function() {

	it('should return the correct action type when calling addList', () => {
	  const addListAction = {
	    type: actionTypes.ADD_LIST,
	    id: 1,
	    name: ''
	  };

	  expect(actions.addList('')).toEqual(addListAction);
	});

	it('should return the correct action type when calling updateList', () => {
	  const updateListAction = {
	    type: actionTypes.UPDATE_LIST,
	    id: 1,
	    name: 'test'
	  };

	  expect(actions.updateList(1, 'test')).toEqual(updateListAction);
	});

	it('should return the correct action type when calling completeList', () => {
	  const completeListAction = {
	    type: actionTypes.COMPLETE_LIST,
	    id: 1
	  };

	  expect(actions.completeList(1)).toEqual(completeListAction);
	});

	it('should return the correct action type when calling deleteList', () => {
	  const deleteListAction = {
	    type: actionTypes.DELETE_LIST,
	    id: 1
	  };

	  expect(actions.deleteList(1)).toEqual(deleteListAction);
	});

});
