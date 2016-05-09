import React, {Component, PropTypes} from 'react';
import UserTableContainer from '../containers/UserTableContainer'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <UserTableContainer />
	}
}

export default App;