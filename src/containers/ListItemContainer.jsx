import React from 'react';
import ListItem from '../components/ListItem';

export default class ListItemContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
	}

	handleClick(e) {
		e.stopPropagation();
	}

	handleTitleClick(e) {
		e.stopPropagation();
		this.props.toggleItemEdit(this.props.item.get('id'));
	}

	handleOnBlur(e) {
		if (e.target.value  && e.target.value !== this.props.item.get('name'))
			this.props.actions.updateList(this.props.item.get('id'), e.target.value);
		else if (!e.target.value)
			this.props.actions.deleteList(this.props.item.get('id'));

		this.props.toggleItemEdit(this.props.item.get('id'));
	}

	handleSlideRight() {
		this.props.actions.completeList(this.props.item.get('id'));
	}

	handleSlideLeft() {
		this.props.actions.deleteList(this.props.item.get('id'));
	}

	render() {

		return (
			<ListItem 
				isEditing={this.props.isEditing} 
				onClick={this.handleClick} 
				onTitleClick={this.handleTitleClick} 
				onBlur={this.handleOnBlur} 
				itemStyle={this.props.itemStyle}
				itemId={this.props.item.get('id')}
				itemName={this.props.item.get('name')}
			>
			</ListItem>
		);
	}
};

ListItemContainer.propTypes = {
	isEditing: 	React.PropTypes.bool.isRequired,
	itemStyle: 	React.PropTypes.object.isRequired,
	item: 		React.PropTypes.object.isRequired,
	actions: 	React.PropTypes.object.isRequired
};