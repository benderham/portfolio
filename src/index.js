import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './App'
import About from './components/About/About'
import NoPage from './components/NoPage/NoPage'

import 'bootstrap-grid'
import './styles/main.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={About} />
      <Route path="*" component={NoPage}/>
    </Route>
  </Router>
), document.getElementById('root'))
