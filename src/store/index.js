import { createStore,compose } from 'redux'
import reduce from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reduce,composeEnhancers());

export default store