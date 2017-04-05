import React from 'react';
import styles from './addButton.scss';

export default class AddButton extends React.Component {

	static propTypes = {
		disabled: React.PropTypes.bool.isRequired,
		onClick:  React.PropTypes.func.isRequired
	};

	render() {
		return (
			<div className={"btn-round " + (this.props.disabled ? "btn-round--disabled" : "")} onClick={this.props.onClick}>
				<span className={"btn-round__plus " + (this.props.disabled ? "btn-round--disabled" : "")}>+</span>
			</div>
		);
	}

}
