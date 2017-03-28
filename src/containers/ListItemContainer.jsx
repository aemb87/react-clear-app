import React from 'react';
import ListItem from '../components/ListItem';

export default class ListItemContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			position : {x: 0, y: 0}
		};

		this.handleClick 		= this.handleClick.bind(this);
		this.handleTitleClick 	= this.handleTitleClick.bind(this);
		this.handleBlur 		= this.handleBlur.bind(this);
		this.handleDrag 		= this.handleDrag.bind(this);
		this.handleDragStop 	= this.handleDragStop.bind(this);
	}

	handleClick(e) {
		e.stopPropagation();
	}

	handleTitleClick(e) {
		e.stopPropagation();
		this.props.toggleItemEdit(this.props.item.get('id'));
	}

	handleBlur(e) {
		if (e.target.value  && e.target.value !== this.props.item.get('name'))
			this.props.actions.updateList(this.props.item.get('id'), e.target.value);
		else if (!e.target.value)
			this.props.actions.deleteList(this.props.item.get('id'));

		this.props.toggleItemEdit();
	}

	handleDrag(e, ui) {
		this.setPosition(ui.x);
	}

	handleDragStop(e, ui) {
		if (this.state.position.x < -50)
			this.props.actions.deleteList(this.props.item.get('id'));
		else if(this.state.position.x > 50)
			this.props.actions.completeList(this.props.item.get('id'));
		else
			this.setPosition();
	}

	setPosition(newX = 0) {
		this.setState({
			position: {x: newX, y: this.state.position.y}
		});
	}

	render() {

		return (
			<ListItem 
				isEditing={this.props.isEditing} 
				onClick={this.handleClick} 
				onTitleClick={this.handleTitleClick} 
				onBlur={this.handleBlur}
				onDragStart={this.handleDragStart}
				onDrag={this.handleDrag}
				onDragStop={this.handleDragStop}
				dragPosition={this.state.position}
				dragDisabled={this.props.dragDisabled}
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