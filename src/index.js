import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import task from './data/todos';

ReactDOM.render(<BrowserRouter><App title={"React ToDo"} initialData={task} /></BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
