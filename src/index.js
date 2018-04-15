import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import registerServiceWorker from './registerServiceWorker';
import App from './App';

import state from './data/state';

const store = createStore(reducer, state);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App title={"React ToDo"} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
