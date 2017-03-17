import React from 'react';
import ListContainer from '../containers/ListContainer';

const dataSource = [
	{name: 'lista1', children: ['item1.1', 'item1.2', 'item1.3']},
	{name: 'lista2', children: ['item2.1', 'item2.2', 'item2.3']},
	{name: 'lista3', children: ['item3.1', 'item4.2']},
	{name: 'lista4', children: ['item4.1']},
	{name: 'lista5', children: []},
	{name: 'lista6', children: []},
	{name: 'lista7', children: []},
	{name: 'lista8', children: []},
];

export default class SubView extends React.Component {
	render() {
		return (
			<ListContainer items={dataSource}></ListContainer>
		);
	}
};