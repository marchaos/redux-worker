import reducer from '../reducers'
import { createWorker } from 'redux-worker'

createWorker(reducer);
