import React from 'react';

export default class ListItem extends React.Component {
	render() {
		return (
			<li className="item" onClick={this.props.onClick}>
				<div className="inner" style={this.props.itemStyle}>
					<span className="title" onClick={this.props.onTitleClick}>
						<span className="text">
							{this.props.item.name}
						</span>
					</span>
					<ItemChildrenCount children={this.props.item.children} showCount={this.props.showCount}/>			
					<input className="field" type="text" value={this.props.item.name} onChange={this.props.onChange}/>
				</div>
			</li>
		);
	}
};

ListItem.defaultProps = {
	showCount: true,
};

function ItemChildrenCount (props) {
	if (!props.showCount) 
		return null;
	
	const childrenCount = props.children ? props.children.length : 0;

	return (
		<div className="count">
			{childrenCount}
		</div>
	);
}