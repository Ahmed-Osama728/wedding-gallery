import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { exampleDetailsReducer } from './reducers/examplesReducers';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  exampleDetails: exampleDetailsReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
