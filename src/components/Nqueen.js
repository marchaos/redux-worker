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
			inputValue: 1
	    };
	},

	onChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	},

	onClick() {
		if (this.props.isCalculating) {
			return;
		}
		this.props.actions.calculateNQueen(this.state.inputValue);
	},

	render() {
		const { numberOfSquares, answer, isCalculating } = this.props

		let ans, bgColor

		if (isCalculating) {
			ans = 'calculating...'
			bgColor = 'rgba(255, 0, 0, 0.2)'
		} else {
			ans = answer
			bgColor = 'rgba(0, 255, 0, 0.2)'
		}

		return (
			<div style={{
				    height: '200px',
				    textAlign: 'center',
				    display: 'inline-block',
				    boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.2)',
				    borderRadius: '2px',
				    padding: '8px 12px',
				    backgroundColor: bgColor,
				    margin: '4px'
				}}>
				<h2>N-Queen Solver</h2>
				<h3>{ 'N = ' + numberOfSquares}</h3>
				<input type='number'
					   onChange={ this.onChange }
					   style={{
					   		padding: '4px 8px',
					   		outline: 'none',
					   		border: 'none',
					   		borderRadius: '2px',
					   		margin: '4px',
						    fontSize: '16px'
					   }}
					   placeholder='Enter number...'/>
				<div>{ ans }</div>
				<button onClick={ this.onClick }
						style={{
					   		padding: '4px 8px',
					   		outline: 'none',
					   		border: 'none',
					   		borderRadius: '2px',
					   		margin: '4px',
					   		cursor: 'pointer'
					   }}>
						Calc
				</button>
			</div>
		)
	}
})