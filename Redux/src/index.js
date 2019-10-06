import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from "redux";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
