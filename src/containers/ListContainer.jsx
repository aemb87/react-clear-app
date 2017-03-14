import React from 'react';
import ListItemContainer from './ListItemContainer';

export default class ListContainer extends React.Component {

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
			const itemStyle = getItemColor(index)
			return (
				<ListItemContainer 
					key={index} 
					itemStyle={itemStyle} 
					item={item} 
					idx={index} 
					total={this.props.items.length}
				>
				</ListItemContainer>
			)
		});


		return (
			<ul>
				{listItems}
			</ul>
		);
	}
};


