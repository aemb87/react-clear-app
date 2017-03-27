import React from 'react';
import ListItemContainer from './ListItemContainer';

export default class ListContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			drag: {active: false, item: null},
			edit: {active: false, item: null}
		};

		this.getItemColor = this.getItemColor.bind(this);
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

	render() {

		const listItems = [...this.props.items].map((item, index) => {
			return (
				<ListItemContainer 
					key={index} 
					itemStyle={this.getItemColor(index)} 
					item={item} 
					idx={index} 
					actions={this.props.actions}
				>
				</ListItemContainer>
			)
		});

		return (
			<div id="list-collection" className="collection">
				<div className="item list-item dummy-item top">                    
					<div className="slider">
						<div className="inner">
							<span className="title">Pull to Create Item</span>
						</div>
					</div>
				</div>
				{listItems}
			</div>
		);
	}
};
