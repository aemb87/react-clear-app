import React from 'react';
import DummyItem from '../dummyItem/dummyItem';
import styles from './list.scss';

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
