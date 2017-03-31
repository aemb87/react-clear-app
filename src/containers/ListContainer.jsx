import React from 'react';
import List from '../components/List/List';
import ListItemContainer from './ListItemContainer';
import AddButtonContainer from './AddButtonContainer';

export default class ListContainer extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			edit: {active: false, item: false}
		};

		this.getItemColor 	= this.getItemColor.bind(this);
		this.addItemHandler = this.addItemHandler.bind(this);
		this.toggleItemEdit = this.toggleItemEdit.bind(this);
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

	toggleItemEdit(itemId = false) {
		if (!itemId)
			this.setState({
				edit: {active: false, item: false}
			});
		else 
			this.setState({
				edit: {active: true, item: itemId}
			});
	}

	addItemHandler() {
		const item = this.props.actions.add('', this.props.match.params.listId);
		this.toggleItemEdit(item.id);
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
			<div id="list-wraper">
				<List>{listItems}</List>
				<AddButtonContainer handleClick={this.addItemHandler} disabled={this.state.edit.active}></AddButtonContainer>
			</div>
		);
	}

}
