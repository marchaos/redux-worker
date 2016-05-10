import reducer from '../reducers'
import { createWorker } from 'redux-worker'

let worker = createWorker();

worker.registerReducer(reducer);
