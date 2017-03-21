import React from 'react';
import ListItem from '../components/ListItem';

export default class ListItemContainer extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);

		this.state = {
			isEditing: false
		};
	}

	handleClick(e) {
		e.stopPropagation();
		console.log('open list');
	}

	handleTitleClick(e) {
		e.stopPropagation();
		this.setState({
			isEditing: true
		});
	}

	handleOnChange(e) {
		e.stopPropagation();
		this.props.actions.updateList(this.props.item.get('id'), e.target.value);
	}

	render() {

		return (
			<ListItem 
				isEditing={this.state.isEditing} 
				onClick={this.handleClick} 
				onTitleClick={this.handleTitleClick} 
				onChange={this.handleOnChange} 
				itemStyle={this.props.itemStyle}
				item={this.props.item}
			>
			</ListItem>
		);
	}
};