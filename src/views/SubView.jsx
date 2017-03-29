import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import { 
	addTodo as add, 
	updateTodo as update, 
	completeTodo as complete, 
	deleteTodo as remove 
} from '../reducers/Actions';


const mapStateToProps = (state, ownProps) => {
	return {
    	items: state.todos.filter(function(item) {
    		return item.get('completed') === false && item.get('listId') == ownProps.match.params.listId
    	})
  	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ add, update, complete, remove }, dispatch)
});

const SubView = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default SubView;