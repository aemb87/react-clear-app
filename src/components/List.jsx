import React from 'react';

export default class List extends React.Component {
	render() {
		return (
			<div id="list-collection" className="collection">
				<div className="item list-item dummy-item top">                    
					<div className="slider">
						<div className="inner">
							<span className="title">Pull to Create Item</span>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		);
	}
};