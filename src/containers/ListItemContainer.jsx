import React from 'react';
import { push } from 'react-router-redux'
import ListItem from '../components/listItem/listItem';
import Store from '../store/store';

export default class ListItemContainer extends React.Component {

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
			position : {x: 0, y: 0}
		};

		this.handleClick 	  = this.handleClick.bind(this);
		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleBlur 	  = this.handleBlur.bind(this);
		this.handleDrag 	  = this.handleDrag.bind(this);
		this.handleDragStop   = this.handleDragStop.bind(this);
	}

	handleClick(e) {
		e.stopPropagation();
		Store.dispatch(push('/' + this.props.item.get('id')));
	}

	handleTitleClick(e) {
		e.stopPropagation();
		this.props.toggleItemEdit(this.props.item.get('id'));
	}

	handleBlur(e) {
		if (e.target.value  && e.target.value !== this.props.item.get('name'))
			this.props.actions.update(this.props.item.get('id'), e.target.value);
		else if (!e.target.value)
			this.props.actions.remove(this.props.item.get('id'));

		this.props.toggleItemEdit();
	}

	handleDrag(e, ui) {
		this.setPosition(ui.x);
	}

	handleDragStop(e, ui) {
		if (this.state.position.x < -50)
			this.props.actions.remove(this.props.item.get('id'));
		else if(this.state.position.x > 50)
			this.props.actions.complete(this.props.item.get('id'));
		else
			this.setPosition();
	}

	setPosition(newX = 0) {
		this.setState({
			position: {x: newX, y: this.state.position.y}
		});
	}

	getItemColor (itemIdx) {
		var baseH = 212,
		    baseS = 93,
		    baseL = 53,

		    stepH = -2.5,
		    stepS = 1,
		    stepL = 2.5,

		    maxColorSpan = 5,

		    spanH = maxColorSpan * stepH,
		    spanS = maxColorSpan * stepS,
		    spanL = maxColorSpan * stepL;


		var o = itemIdx,
		    n = this.props.total,
		    sH = stepH,
		    sS = stepS,
		    sL = stepL;

		if (n > maxColorSpan) {
		    sH = spanH / n;
		    sS = spanS / n;
		    sL = spanL / n;
		}

		return {
			backgroundColor : 'hsl('
		        + (baseH + o * sH) + ','
		        + Math.min(100, (baseS + o * sS)) + '%,'
		        + Math.min(100, (baseL + o * sL)) + '%)'
		};
	}

	render() {

		return (
			<ListItem
				isEditing={this.props.isEditing}
                isShaded={this.props.isShaded}
				onClick={this.handleClick}
				onTitleClick={this.handleTitleClick}
				onBlur={this.handleBlur}
				onDragStart={this.handleDragStart}
				onDrag={this.handleDrag}
				onDragStop={this.handleDragStop}
				dragPosition={this.state.position}
				dragDisabled={this.props.dragDisabled}
				itemStyle={this.getItemColor(this.props.idx)}
				itemId={this.props.item.get('id')}
				itemName={this.props.item.get('name')}
			>
			</ListItem>
		);
	}

}
