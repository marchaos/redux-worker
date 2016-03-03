import React, { createClass } from 'react'

export default createClass({
	getDefaultProps() {
	    return {
			numberOfSquares: 1,
			answer: null,
			actions: {
				calculateNQueen: function() {}
			}
	    };
	},

	getInitialState() {
	    return {
	        isCalculating: false,
			inputValue: 1
	    };
	},

	onChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	},

	onClick() {
		this.setState({
			isCalculating: true,
			answer: null
		});
		this.props.actions.calculateNQueen(this.state.inputValue);
	},

	render() {
		const { numberOfSquares, answer } = this.props
		const { isCalculating } = this.state

		let ans

		if (isCalculating) {
			ans = 'calculating...'
		} else {
			ans = answer
		}

		return (
			<div>
				<div>{ 'Number of Square: ' + numberOfSquares}</div>
				<div>{ 'answer: ' + ans }</div>
				<input type='number'
					   onChange={ this.onChange } 
					   defaultValue='Enter number of squares'/>
				<button onClick={ this.onClick }>Calc</button>
			</div>
		)
	}
})