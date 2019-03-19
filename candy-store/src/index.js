// import React from 'react'
// import ReactDOM from 'react-dom'
// import './style/site.css'
// import 'font-awesome/css/font-awesome.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'mdbreact/dist/css/mdb.css'
// import '../node_modules/toastr/build/toastr.min.css'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'
// import {BrowserRouter} from 'react-router-dom'
// import reducers from './reducers'
// import {createStore, applyMiddleware, combineReducers} from 'redux'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'

// const store = createStore(combineReducers(reducers), applyMiddleware(thunk, createLogger))

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root'))
// registerServiceWorker()

import React from "react";
import ReactDOM from "react-dom";
import "./style/site.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../node_modules/toastr/build/toastr.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk, createLogger))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();