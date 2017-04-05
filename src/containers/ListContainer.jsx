import React from 'react';
import List from '../components/List/List';
import ListItemContainer from './ListItemContainer';
import TodoItemContainer from './TodoItemContainer';
import AddButtonContainer from './AddButtonContainer';

export default class ListContainer extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			edit: {active: false, item: false}
		};

		this.addItemHandler = this.addItemHandler.bind(this);
		this.toggleItemEdit = this.toggleItemEdit.bind(this);
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

	isTodoList() {
		return typeof this.props.match.params.listId !== 'undefined';
	}

	render() {

		let listItems = [];

		if (this.isTodoList()) {
			listItems = [...this.props.items].map((item, index) => {
				return (
					<TodoItemContainer 
						key={item.get('id')} 
						idx={index}
						total={this.props.items.size}
						item={item} 
						actions={this.props.actions}
						isEditing={this.isEditing(item.get('id'))}
						toggleItemEdit={this.toggleItemEdit}
					>
					</TodoItemContainer>
				)
			});
		}
		else {
			listItems = [...this.props.items].map((item, index) => {
				return (
					<ListItemContainer 
						key={item.get('id')} 
						idx={index}
						total={this.props.items.size}
						item={item} 
						actions={this.props.actions}
						isEditing={this.isEditing(item.get('id'))}
						toggleItemEdit={this.toggleItemEdit}
					>
					</ListItemContainer>
				)
			});
		}

		return (
			<div id="list-wraper">
				<List>{listItems}</List>
				<AddButtonContainer handleClick={this.addItemHandler} disabled={this.state.edit.active}></AddButtonContainer>
			</div>
		);
	}

}
