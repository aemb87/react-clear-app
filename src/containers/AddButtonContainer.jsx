import React from 'react';
import AddButton from '../components/AddButton/AddButton';

export default class AddButtonContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if (!this.props.disabled) {
			this.props.handleClick();
		}
	}

	render() {
		return (
			<AddButton onClick={this.handleClick} disabled={this.props.disabled}></AddButton>
		);
	}
}