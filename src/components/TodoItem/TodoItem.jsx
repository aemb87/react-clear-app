import React from 'react';
import Draggable from 'react-draggable';
import styles from './TodoItem.scss';

export default class TodoItem extends React.Component {
	
	static propTypes = {
		isEditing: 	   React.PropTypes.bool.isRequired,
		//dragCompleted: React.PropTypes.bool.isRequired,
		onTitleClick:  React.PropTypes.func.isRequired,
		onBlur: 	   React.PropTypes.func.isRequired,
		itemStyle: 	   React.PropTypes.object.isRequired,
		itemId: 	   React.PropTypes.number.isRequired,
		itemName: 	   React.PropTypes.string.isRequired,
		itemCompleted: React.PropTypes.bool.isRequired,
	};

	static defaultProps = {
		showCount: true
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
		const mainClass = 'todo-item';
		const itemClass = [mainClass];

		if (this.props.isEditing)
			itemClass.push(mainClass + "--edit");
		
		if (!this.props.children || this.props.children.length === 0)
			itemClass.push(mainClass + "--empty");

		return itemClass.join(" ");
	}

	render() {
		return (
			<div className={this.getItemClass()}>
				<Draggable 
				  axis="x" 
				  bounds={{left: -62, right: 62}} 
				  position={this.props.dragPosition}
				  disabled={this.props.dragDisabled} 
				  onDrag={this.props.onDrag} 
				  onStop={this.props.onDragStop}
				>
					<div 
					  className={[
					  	"todo-item__slider",
					  	 (this.props.itemCompleted ? "todo-item__slider--done" : ""),
					  	 (this.props.dragCompleted ? "todo-item__slider--green" : "")
				  	  ]} 
					  style={this.props.itemStyle} 
					>
						<div className="todo-item__inner">
							<span 
							  className={"todo-item__title " + (this.props.itemCompleted ? "todo-item__title--done" : "")} 
							  onClick={this.props.onTitleClick}
							>
								<span className="todo-item__text">
									{this.props.itemName}
								</span>
							</span>
							<input 
								name={"list-item-" + this.props.itemId}
								className="todo-item__field" 
								type="text" 
								defaultValue={this.props.itemName} 
								onBlur={this.props.onBlur}
								onClick={(e) => {e.stopPropagation();}}
								ref={(input) => {this.textInput = input;}}
							/>
						</div>
					</div>
				</Draggable>
				<img className="todo-item__check" src="img/check.png" />
				<img className="todo-item__cross" src="img/cross.png" />
			</div>
		);
	}
	
}