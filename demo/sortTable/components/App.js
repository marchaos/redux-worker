import React, {Component, PropTypes} from 'react';
import UserTableContainer from '../containers/UserTableContainer'
import GeneratorContainer from '../containers/GeneratorContainer'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{
					display: 'inline-flex',
					flexFlow: 'column nowrap',
					justifyContent: 'center',
					boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.7)',
					borderRadius: '5px',
					padding: '4px',
					backgroundColor: 'white'
				}}>
				<GeneratorContainer />
				<UserTableContainer />
			</div>
		);
	}
}

export default App;