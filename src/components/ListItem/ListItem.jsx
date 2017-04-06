import React from 'react';
import Draggable from 'react-draggable';
import classNames from 'classnames';
import styles from './listItem.scss';

export default class ListItem extends React.Component {

	static propTypes = {
		isEditing: 	  React.PropTypes.bool.isRequired,
        isShaded:     React.PropTypes.bool.isRequired,
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

	render() {

        const mainClass = classNames({
            'item': true,
            'item--edit': this.props.isEditing,
            'item--shade': this.props.isShaded,
            'item--empty': false//!this.props.children || this.props.children.length === 0
        });

        const titleClass = classNames({
            'item__title': true,
            'item__title--edit': this.props.isEditing
        });

        const fieldClass = classNames({
            'item__field': true,
            'item__field--edit': this.props.isEditing
        });

		return (
			<div className={mainClass} onClick={this.props.onClick}>
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
							<span className={titleClass} onClick={this.props.onTitleClick}>
								<span className="item__text">
									{this.props.itemName}
								</span>
							</span>
							<div className="item__count">
                                {this.props.children ? this.props.children : 0}
                            </div>
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
				<img className="item__check" src="img/check.png" />
				<img className="item__cross" src="img/cross.png" />
			</div>
		);
	}

}
