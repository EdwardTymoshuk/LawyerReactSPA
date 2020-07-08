import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import store from './redux/redux-store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>, document.getElementById('root'))

