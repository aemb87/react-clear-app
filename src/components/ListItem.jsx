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

	renderItemCount() {
		if (!this.props.showCount) 
			return "";
	
		const childrenCount = this.props.children ? this.props.children.length : 0;

		return (
			<div className="count">
				{childrenCount}
			</div>
		);
	}

	render() {
		return (
			<div className={this.getItemClass()} onClick={this.props.onClick}>
				<div className="slider" style={this.props.itemStyle}>
					<div className="inner">
						<span className="title" onClick={this.props.onTitleClick}>
							<span className="text">
								{this.props.item.get('name')}
							</span>
						</span>
						{this.renderItemCount()}
						<input 
							name={"list-item-" + (this.props.item.get('id'))}
							className="field" 
							type="text" 
							defaultValue={this.props.item.get('name')} 
							onBlur={this.props.onBlur}
							onClick={(e) => {e.stopPropagation();}}
							ref={(input) => {this.textInput = input;}}
						/>
					</div>
				</div>
				<img className="check drag" src="img/check.png" />
				<img className="cross drag" src="img/cross.png" />
			</div>
		);
	}
};

ListItem.propTypes = {
	isEditing: React.PropTypes.bool.isRequired,
	onClick: React.PropTypes.func.isRequired,
	onTitleClick: React.PropTypes.func.isRequired,
	onBlur: React.PropTypes.func.isRequired,
	itemStyle: React.PropTypes.object.isRequired,
	item: React.PropTypes.object.isRequired
};

ListItem.defaultProps = {
	showCount: true
};