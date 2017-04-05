import React from 'react';
import styles from './dummyItem.scss';

export default class DummyItem extends React.Component {
	render() {
		return (
			<div className="item list-item dummy-item top">
				<div className="slider">
					<div className="inner">
						<span className="title">Pull to Create Item</span>
					</div>
				</div>
			</div>
		);
	}
}
