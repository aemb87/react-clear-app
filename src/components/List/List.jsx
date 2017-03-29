import React from 'react';
import DummyItem from '../DummyItem/DummyItem';
import styles from './List.scss';

export default class List extends React.Component {
	render() {
		return (
			<div id="list-collection" className="collection">
				<DummyItem />
				{this.props.children}
			</div>
		);
	}
};