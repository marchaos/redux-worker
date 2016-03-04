import React, { createClass } from 'react'

export default createClass({
	getInitialState() {
	    return {
	        degree: 0  
	    };
	},

	componentDidMount() {
		setInterval(function() {
			this.setState({
				degree: this.state.degree + 10
			});
		}.bind(this), 16);      
	},

	render() {
		return (
			<div style={{
				    height: '200px',
				    width: '200px',
				    textAlign: 'center',
				    display: 'inline-block',
				    boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.2)',
				    borderRadius: '2px',
				    padding: '8px 12px',
				    backgroundColor: 'rgba(0, 0, 0, 0.05)',
				    margin: '4px'
				}}>
				<h1>Spinner</h1>
				<div style={{
		            'position': 'relative',
		            'display': 'inline-block',
		            'height': '70px',
		            'left': '0',
		            'right': '0',
		            'width': '70px',
		            'borderRadius': '50%',
		            border: '2px solid rgba(0, 0, 0, 0.5)',
		            'backgroundColor': 'rgba(255, 85, 0, 0.7)',
		            'transformOrigin': 'bottom',
		            'transform': 'rotateY(' + this.state.degree + 'deg)',
		        }} />
			</div>
		)
	},
});