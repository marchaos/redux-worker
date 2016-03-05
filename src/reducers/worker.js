import reducer from '../reducers'
import { createWorker } from '../reduxWorker'

createWorker(reducer);
