import React from 'react';
import List from '../components/List';
import ListItemContainer from './ListItemContainer';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			position: {x: 0, y: 0},
			edit: {active: false, item: false}
		};

		this.getItemColor = this.getItemColor.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
		this.handleDragStop = this.handleDragStop.bind(this);
		this.toggleItemEdit = this.toggleItemEdit.bind(this);
		this.setPosition = this.setPosition.bind(this);
		this.isEditing = this.isEditing.bind(this);
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
		    n = this.props.items.length,
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

	setPosition(newX, newY) {
		this.setState({
			position: {x: newX, y: newY}
		});
	}

	handleDrag(e, ui) {
		this.setPosition(0, ui.y);
	}

	handleDragStop(e, ui) {
		if (this.state.position.y > 50) {
			const item = this.props.actions.addList('');
			this.toggleItemEdit(item.id);
		}
		this.setPosition(0, 0);
	}

	toggleItemEdit(itemId) {
		if (!itemId|| itemId === this.state.edit.item)
			this.setState({
				edit: {active: false, item: false}
			});
		else 
			this.setState({
				edit: {active: true, item: itemId}
			});
	}

	isEditing(itemId) {
		return this.state.edit.item === itemId;
	}

	render() {

		const listItems = [...this.props.items].map((item, index) => {
			return (
				<ListItemContainer 
					key={item.get('id')} 
					itemStyle={this.getItemColor(index)} 
					item={item} 
					actions={this.props.actions}
					isEditing={this.isEditing(item.get('id'))}
					toggleItemEdit={this.toggleItemEdit}
				>
				</ListItemContainer>
			)
		});

		return (
			<List position={this.state.position} dragDisabled={this.state.edit.active} onDrag={this.handleDrag} onDragStop={this.handleDragStop}>
				{listItems}
			</List>
		);
	}
};
