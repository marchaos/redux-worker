const applyWorker = (worker) => {
	return createStore => (reducer, initialState, enhancer) => {
		if (!(worker instanceof Worker)) {
			console.error('Expect input to be a Web Worker. Fall back to normal store.');
			return createStore(reducer, initialState, enhancer);
		}

		// New reducer for workified store
		let replacementReducer = (state, action) => {
			switch (action.type) {
				case 'REDUX_WORKER___STATE_UPDATE':
					return action.state;
				default:
					return state;
			}
		}

		// Create store using new reducer
		let store = createStore(replacementReducer, reducer({}, {}), enhancer);

		// Store reference of old dispatcher
		let next = store.dispatch;

		// Replace dispatcher
		store.dispatch = (action) => {
			worker.postMessage(action);
		}
		
		// Add worker events listener
		worker.addEventListener('message', function(e) {
			if (typeof e.data.type === 'string') {
				next(e.data);
			}
		});

		return store;
	}
}

const createWorker = (reducer) => {
	// Make initial state
	let state = reducer({}, {});

	self.addEventListener('message', function(e) {
		var action = e.data;

		if (typeof action.type === 'string') {
			// Set new state
			state = reducer(state, action);

			// Send new state to main thread
			self.postMessage({
				type: 'REDUX_WORKER___STATE_UPDATE',
				state: state
			});
		}
	});
}
export { applyWorker, createWorker }
export default { applyWorker, createWorker }