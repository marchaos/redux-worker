const createWorker = (actionPrefix='') => {
    let worker = new ReduxWorker();

    let messageHandler = e => {
        const action = e.data;

        if (typeof action.type === 'string') {
            if (!worker.reducer || typeof worker.reducer !== 'function') {
                throw new Error(
                    'Expect reducer to be function. Have you registerReducer yet?'
                );
            }

            let state = worker.state;
            state = worker.state = worker.reducer(state, action);

            // Send new state to main thread
            console.time("postmessage in");
            self.postMessage({
                type: `${actionPrefix}${action.type}`,
                state: state,
                logToServer: false,
                action: action
            });
            console.timeEnd("postmessage in");
        }
    };

    worker.destroy = () => {
        self.removeEventListener('message', messageHandler);
    };

    self.addEventListener('message', messageHandler);

    return worker;
};

class ReduxWorker {
    constructor() {
        this.state = {};
        this.reducer = null;
    }

    registerReducer(reducer) {
        this.reducer = reducer;
        this.state = reducer({}, {});
    }
}

export default createWorker;
