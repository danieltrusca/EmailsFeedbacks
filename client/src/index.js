import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index"

import App from './components/App';
import * as serviceWorker from './serviceWorker';

//just for testing purpose
import axios from "axios";
window.axios=axios;


const middleWare = [thunk];

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
