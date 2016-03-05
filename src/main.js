import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'
import { applyWorker } from './reduxWorker'

const worker = new Worker('./worker.bundle.js');

const enhancer = compose(
	// Middleware you want to use in development:
	applyMiddleware(thunk),
	applyWorker(worker)
);

const store = createStore(rootReducer, {}, enhancer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
