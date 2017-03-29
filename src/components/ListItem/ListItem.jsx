import React from 'react';
import Draggable from 'react-draggable';
import styles from './ListItem.scss';

export default class ListItem extends React.Component {
	
	componentDidMount() {
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
				<Draggable 
				  axis="x" 
				  bounds={{left: -62, right: 62}} 
				  position={this.props.dragPosition}
				  disabled={this.props.dragDisabled}
				  onStart={this.props.onDragStart} 
				  onDrag={this.props.onDrag} 
				  onStop={this.props.onDragStop}
				>
					<div className="slider" style={this.props.itemStyle}>
						<div className="inner">
							<span className="title" onClick={this.props.onTitleClick}>
								<span className="text">
									{this.props.itemName}
								</span>
							</span>
							{this.renderItemCount()}
							<input 
								name={"list-item-" + this.props.itemId}
								className="field" 
								type="text" 
								defaultValue={this.props.itemName} 
								onBlur={this.props.onBlur}
								onClick={(e) => {e.stopPropagation();}}
								ref={(input) => {this.textInput = input;}}
							/>
						</div>
					</div>
				</Draggable>
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
	itemId: React.PropTypes.number.isRequired,
	itemName: React.PropTypes.string.isRequired
};

ListItem.defaultProps = {
	showCount: true
};