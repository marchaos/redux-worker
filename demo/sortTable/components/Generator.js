import React, {Component, PropTypes} from 'react';

class Generator extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>Sort Table</div>
				<div>
					<button onClick={this.props.generateUsers.bind(this, 100)}>100</button>
					<button onClick={this.props.generateUsers.bind(this, 1000)}>1000</button>
					<button onClick={this.props.generateUsers.bind(this, 100000)}>100000</button>
				</div>
			</div>
		);
	}
}

export default Generator;