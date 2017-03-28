import React from 'react';
import Draggable from 'react-draggable';

export default class List extends React.Component {
	render() {
		return (
			<Draggable 
			  axis="y" 
			  bounds={{top: 0, bottom: 62}} 
			  position={this.props.position}
			  disabled={this.props.dragDisabled}
			  onDrag={this.props.onDrag} 
			  onStop={this.props.onDragStop}
			>
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
			</Draggable>
		);
	}
};