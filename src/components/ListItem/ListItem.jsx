import React from 'react';
import Draggable from 'react-draggable';
import styles from './ListItem.scss';

export default class ListItem extends React.Component {
	
	static propTypes = {
		isEditing: 	  React.PropTypes.bool.isRequired,
		onClick: 	  React.PropTypes.func.isRequired,
		onTitleClick: React.PropTypes.func.isRequired,
		onBlur: 	  React.PropTypes.func.isRequired,
		itemStyle: 	  React.PropTypes.object.isRequired,
		itemId: 	  React.PropTypes.number.isRequired,
		itemName: 	  React.PropTypes.string.isRequired
	};

	componentDidMount() {
		this.focusTextInput();
	}

	componentDidUpdate() {
		this.focusTextInput();
	}

	focusTextInput() {
		if (this.props.isEditing) {
			this.textInput.focus();
		}
	}

	getItemClass() {
		const mainClass = 'item';
		const itemClass = [mainClass];

		if (this.props.isEditing)
			itemClass.push(mainClass + "--edit");
		
		if (!this.props.children || this.props.children.length === 0)
			itemClass.push(mainClass + "--empty");

		return itemClass.join(" ");
	}

	renderItemCount() {
	
		const childrenCount = this.props.children ? this.props.children : 0;

		return (
			<div className="item__count">
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
					<div className="item__slider" style={this.props.itemStyle}>
						<div className="item__inner">
							<span className="item__title" onClick={this.props.onTitleClick}>
								<span className="item__text">
									{this.props.itemName}
								</span>
							</span>
							{this.renderItemCount()}
							<input 
								name={"list-item-" + this.props.itemId}
								className="item__field" 
								type="text" 
								defaultValue={this.props.itemName} 
								onBlur={this.props.onBlur}
								onClick={(e) => {e.stopPropagation();}}
								ref={(input) => {this.textInput = input;}}
							/>
						</div>
					</div>
				</Draggable>
				<img className="item__check" src="img/check.png" />
				<img className="item__cross" src="img/cross.png" />
			</div>
		);
	}
	
}