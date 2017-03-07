import React from 'react';

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


export default class ListItem extends React.Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
	}

	render() {

		var o = this.props.idx,
            n = this.props.total,
            sH = stepH,
            sS = stepS,
            sL = stepL;

        if (n > maxColorSpan) {
            sH = spanH / n;
            sS = spanS / n;
            sL = spanL / n;
        }

        const itemStyle = {
        	backgroundColor : 'hsl('
	            + (baseH + o * sH) + ','
	            + Math.min(100, (baseS + o * sS)) + '%,'
	            + Math.min(100, (baseL + o * sL)) + '%)'
	        };

		return (
			<li className="item" onClick={this.handleClick}>
				<div className="inner" style={itemStyle}>
					<span className="title">
						<span className="text">
							{this.props.item.name}
						</span>
					</span>
					<div className="count">
						{this.props.item.items.length}
					</div>
					<input className="field" type="text" value={this.props.item.name} />
				</div>
			</li>
		);
	}
};