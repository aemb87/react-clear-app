import React from 'react';
import List from './List';

const dataSource = [
	{name: 'lista1', items: ['item1.1', 'item1.2', 'item1.3']},
	{name: 'lista2', items: ['item2.1', 'item2.2', 'item2.3']},
	{name: 'lista3', items: ['item3.1', 'item4.2']},
	{name: 'lista4', items: ['item4.1']},
	{name: 'lista5', items: []},
	{name: 'lista6', items: []},
	{name: 'lista7', items: []},
	{name: 'lista8', items: []},
];

export default class App extends React.Component {
	render() {
		return (
			<List items={dataSource}></List>
		);
	}
};