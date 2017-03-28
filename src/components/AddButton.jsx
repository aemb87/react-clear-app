import React from 'react';

export default class AddButton extends React.Component {
	render() {
		return (
			<div className={"btn-round ripple " + (this.props.disabled ? "disabled" : "")} onClick={this.props.onClick}>
				<span>+</span>
			</div>
		);
	}
};