import { createStore,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reduce from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reduce,composeEnhancers(
    applyMiddleware(thunk)
));

export default store