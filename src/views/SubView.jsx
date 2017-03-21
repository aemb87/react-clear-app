import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import { addTodo, updateTodo, deleteTodo } from '../reducers/Actions';

const getTodosByList = (state, idList) => {
	return state.todos.filter(function(item) {
		return item.listId === idList;
	});
};

const mapStateToProps = (state, ownProps) => {
	return {
		items: getTodosByList(state, ownProps.params.listId)
	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ addTodo, updateTodo, deleteTodo }, dispatch)
});

const SubView = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default SubView;