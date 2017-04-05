import React from 'react';
import AddButton from '../components/addButton/addButton';

export default class AddButtonContainer extends React.Component {

	static propTypes = {
		disabled: React.PropTypes.bool.isRequired
	};

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
