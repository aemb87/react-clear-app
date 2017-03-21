import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import { addList, updateList, deleteList } from '../reducers/Actions';

const mapStateToProps = (state) => {
	return {
    	items: state.get('lists').filter(function(item) {
    		return item.get('completed') === false
    	})
  	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ addList, updateList, deleteList }, dispatch)
});

const MainView = connect(mapStateToProps, mapDispatchToProps)(ListContainer);

export default MainView;