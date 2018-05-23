const applyWorker = worker => {
    return createStore => (reducer, initialState, enhancer) => {
        if (!(worker instanceof Worker)) {
            console.error(
                'Expect input to be a Web Worker. Fall back to normal store.'
            );
            return createStore(reducer, initialState, enhancer);
        }

        let store = createStore(reducer, reducer({}, {}), enhancer);

        // Store reference of old dispatcher
        let next = store.dispatch;

        // Replace dispatcher
        store.dispatch = action => {
            if (action.useWorker === true) {
                console.info("using worker");
                console.time("postmessage out");
                worker.postMessage(action);
                console.timeEnd("postmessage out");
            } else {
                return next(action);
            }
        };

        // Add worker events listener
        worker.addEventListener('message', function (e) {
            let action = e.data;
            if (typeof action.type === 'string') {
                next(action);
            }
        });

        return store;
    };
};

export default applyWorker;
