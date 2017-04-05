import React from 'react';
import Draggable from 'react-draggable';
import classNames from 'classnames';
import styles from './todoItem.scss';


export default class TodoItem extends React.Component {

	static propTypes = {
		isEditing: 	   React.PropTypes.bool.isRequired,
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

	render() {

        const mainClass = classNames({
            'todo-item': true,
            'todo-item--edit': this.props.isEditing,
            'todo-item--empty': !this.props.children || this.props.children.length === 0
        });

        const titleClass = classNames({
            'todo-item__title': true,
            'todo-item__title--done': this.props.itemCompleted,
            'todo-item__title--edit': this.props.isEditing,
        })

        const fieldClass = classNames({
            'todo-item__field': true,
            'todo-item__field--edit': this.props.isEditing
        });

		return (
			<div className={mainClass}>
				<Draggable
				  axis="x"
				  bounds={{left: -62, right: 62}}
				  position={this.props.dragPosition}
				  disabled={this.props.dragDisabled}
				  onDrag={this.props.onDrag}
				  onStop={this.props.onDragStop}
				>
					<div
					  className="todo-item__slider" style={this.props.itemStyle}>
						<div className="todo-item__inner">
							<span className={titleClass} onClick={this.props.onTitleClick}>
								<span className="todo-item__text">
									{this.props.itemName}
								</span>
							</span>
							<input
								name={"list-item-" + this.props.itemId}
								className={fieldClass}
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
