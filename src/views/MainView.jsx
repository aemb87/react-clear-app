import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import { 
	addList as add, 
	updateList as update, 
	completeList as complete, 
	deleteList as remove 
} from '../reducers/Actions';


const mapStateToProps = (state) => {
	return {
    	items: state.lists.filter(function(item) {
    		return item.get('completed') === false
    	})
  	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ add, update, complete, remove }, dispatch)
});

const MainView = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default MainView;