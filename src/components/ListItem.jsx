import React from 'react';

export default class ListItem extends React.Component {
	componentDidUpdate() {
		if (this.props.isEditing) {
			this.textInput.focus();
		}
	}

	render() {
		const itemClass = this.props.isEditing ? 'item edit' : 'item';

		return (
			<li className={itemClass} onClick={this.props.onClick}>
				<div className="inner" style={this.props.itemStyle}>
					<span className="title" onClick={this.props.onTitleClick}>
						<span className="text">
							{this.props.item.get('name')}
						</span>
					</span>
					<ItemChildrenCount children={this.props.item.get('children')} showCount={this.props.showCount}/>			
					<input 
						name=""
						className="field" 
						type="text" 
						defaultValue={this.props.item.get('name')} 
						onBlur={this.props.onBlur}
						onClick={(e) => {e.stopPropagation();}}
						ref={(input) => { this.textInput = input; }}
					/>
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