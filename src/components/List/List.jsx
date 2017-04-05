import React from 'react';
import DummyItem from '../DummyItem/DummyItem';
import styles from './List.scss';

export default class List extends React.Component {
	render() {
		return (
			<div className="collection">
				<DummyItem />
				{this.props.children}
			</div>
		);
	}
};