import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import About from './components/About/About'
import Work from './components/Work/Work'

import 'bootstrap-grid'
import './styles/main.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={About} />
    <Route path='/work' component={Work} />
  </Router>
), document.getElementById('root'));
