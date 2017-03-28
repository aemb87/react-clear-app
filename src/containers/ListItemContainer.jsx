import React from 'react';
import ListItem from '../components/ListItem';

export default class ListItemContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);

		this.state = {
			isEditing: false
		};
	}

	handleClick(e) {
		e.stopPropagation();
		history.push('/' + this.props.item.get('id'));
	}

	handleTitleClick(e) {
		e.stopPropagation();
		this.setState({
			isEditing: true
		});
	}

	handleOnBlur(e) {
		if (e.target.value  && e.target.value !== this.props.item.get('name'))
			this.props.actions.updateList(this.props.item.get('id'), e.target.value);
		else if (!e.target.value)
			this.props.actions.deleteList(this.props.item.get('id'));

		this.setState({
			isEditing: false
		});
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
				isEditing={this.state.isEditing} 
				onClick={this.handleClick} 
				onTitleClick={this.handleTitleClick} 
				onBlur={this.handleOnBlur} 
				itemStyle={this.props.itemStyle}
				item={this.props.item}
			>
			</ListItem>
		);
	}
};

ListItemContainer.propTypes = {
	itemStyle: 	React.PropTypes.object.isRequired,
	item: 		React.PropTypes.object.isRequired,
	actions: 	React.PropTypes.object.isRequired
};