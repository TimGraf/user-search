import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/rootReducer.js';

const initialState = { users: [], search: '', page: 0, pageSize: 5, total: 0 };
const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
