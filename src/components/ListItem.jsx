import React from 'react';

export default class ListItem extends React.Component {
	componentDidUpdate() {
		if (this.props.isEditing) {
			this.textInput.focus();
		}
	}

	getItemClass() {
		let itemClass = ["item", "list-item"];
		
		if (this.props.isEditing)
			itemClass.push("edit");
		
		if (!this.props.children || this.props.children.length === 0)
			itemClass.push("empty");

		return itemClass.join(" ");
	}

	render() {
		return (
			<li className={this.getItemClass()} onClick={this.props.onClick}>
				<div className="slider" style={this.props.itemStyle}>
					<div className="inner">
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
							ref={(input) => {this.textInput = input;}}
						/>
					</div>
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