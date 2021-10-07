import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import productReducer from './products/productReducer';

const store = createStore(productReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;