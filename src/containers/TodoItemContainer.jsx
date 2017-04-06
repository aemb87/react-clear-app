import React from 'react';
import TodoItem from '../components/todoItem/todoItem';

export default class TodoItemContainer extends React.Component {

	static propTypes = {
		idx: 		React.PropTypes.number.isRequired,
		total: 		React.PropTypes.number.isRequired,
		isEditing: 	React.PropTypes.bool.isRequired,
        isShaded:   React.PropTypes.bool.isRequired,
		item: 		React.PropTypes.object.isRequired,
		actions: 	React.PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			position: {x: 0, y: 0}
		};

		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleBlur 	  = this.handleBlur.bind(this);
		this.handleDrag 	  = this.handleDrag.bind(this);
		this.handleDragStop   = this.handleDragStop.bind(this);
	}

	handleTitleClick(e) {
		e.stopPropagation();
		this.props.toggleItemEdit(this.props.item.get('id'));
	}

	handleBlur(e) {
		if (e.target.value && e.target.value !== this.props.item.get('name'))
			this.props.actions.update(this.props.item.get('id'), e.target.value);
		else if (!e.target.value)
			this.props.actions.remove(this.props.item.get('id'));

		this.props.toggleItemEdit();
	}

	handleDrag(e, ui) {
		this.setPosition(ui.x);
	}

	handleDragStop(e, ui) {
		if (this.state.position.x < -50) {
			this.props.actions.remove(this.props.item.get('id'));
		}
		else if(this.state.position.x > 50) {
			this.props.actions.complete(this.props.item.get('id'));
			this.setPosition();
		}
		else
			this.setPosition();
	}

	setPosition(newX = 0) {
		this.setState({
			position: {x: newX, y: this.state.position.y}
		});
	}

	getItemColor (itemIdx) {
		if (this.props.item.get('completed') === true)
			return {backgroundColor: '#000'};
		if (this.state.position.x > 50)
			return {backgroundColor : '#0A3'};

		const baseH = 354,
	        baseS = 100,
	        baseL = 46,

	        stepH = 7,
	        stepL = 2,

	        maxColorSpan = 7,

	        spanH = stepH * maxColorSpan,
	        spanL = stepL * maxColorSpan,

	        o = itemIdx,
		    n = this.props.total;


		let sH = stepH,
		    sL = stepL;

		if (n > maxColorSpan) {
		    sH = spanH / n;
		    sL = spanL / n;
		}

		return {
			backgroundColor : 'hsl('
                + (baseH + o * sH) + ','
                + (o ? (baseS - 10) : baseS)  + '%,'
                + (baseL + o * sL) + '%)'
		};
	}

	render() {

		return (
			<TodoItem
				isEditing={this.props.isEditing}
                isShaded={this.props.isShaded}
				onTitleClick={this.handleTitleClick}
				onBlur={this.handleBlur}
				onDrag={this.handleDrag}
				onDragStop={this.handleDragStop}
				dragPosition={this.state.position}
				dragDisabled={this.props.dragDisabled}
				itemStyle={this.getItemColor(this.props.idx)}
				itemId={this.props.item.get('id')}
				itemName={this.props.item.get('name')}
				itemCompleted={this.props.item.get('completed')}

			>
			</TodoItem>
		);
	}

}
