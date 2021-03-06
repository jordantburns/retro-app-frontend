import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import Provider from './Components/Provider'
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'

let history = createHistory()

ReactDOM.render(
    <Provider>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)