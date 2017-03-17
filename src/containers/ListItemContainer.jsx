import React from 'react';
import ListItem from '../components/ListItem';

export default class ListItemContainer extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		console.log('open list');
	}

	handleTitleClick(e) {
		e.preventDefault();
		console.log('edit list title');
	}

	handleOnChange(e) {
		e.preventDefault();	
	}

	render() {

		return (
			<ListItem 
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