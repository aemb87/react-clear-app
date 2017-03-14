import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
	render() {
		return (
			<ul>
				{
					[...this.props.items].map((item, index) => {
						return (
							<ListItem key={index} item={item} idx={index} total={this.props.items.length}></ListItem>
						)
					})
				}
			</ul>
		);
	}
};