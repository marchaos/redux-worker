import reducer from '../reducers'
import { createWorker } from '../../src/reduxWorker'

createWorker(reducer);
