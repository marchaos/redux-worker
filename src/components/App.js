import React from 'react'
import NqueenContainer from '../containers/NqueenContainer'
import Counter from '../components/Counter'
import Blinker from '../components/Blinker'
import Spinner from '../components/Spinner'

const App = () => (
	<div style={{
			display: 'flex',
			flexFlow: 'row wrap',
			justifyContent: 'center'
		}}>
		<NqueenContainer />
		<Counter />
		<Blinker />
		<Spinner />
	</div>
)

export default App