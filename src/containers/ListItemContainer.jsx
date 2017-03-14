import React from 'react';
import ListItem from '../component/ListItem';

export default class ListItemContainer extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
	}

	render() {

		return (
			<ListItem 
				onClick={this.handleClick} 
				itemStyle={this.props.itemStyle}
				idx= 
				name={this.props.item.name} 
				children={this.props.item.items}>
			</ListItem>
		);
	}
};