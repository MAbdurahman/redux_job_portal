//**************** imports ****************//
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//**************** imported reducers ****************//
import { jobsReducer } from './reducers/jobsReducer';
import { loaderReducer } from './reducers/loaderReducer'
//**************** combined reducers ****************//
const reducers = combineReducers({
	jobs: jobsReducer,
   loader: loaderReducer
});

//**************** middlewares ****************//
const middleware = [thunk];

//**************** the store ****************//
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
