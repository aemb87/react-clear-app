import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import { addList, updateList, completeList, deleteList } from '../reducers/Actions';

const mapStateToProps = (state) => {
	return {
    	items: state.get('lists').filter(function(item) {
    		return item.get('completed') === false
    	}).reverse()
  	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ addList, updateList, completeList, deleteList }, dispatch)
});

const MainView = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default MainView;