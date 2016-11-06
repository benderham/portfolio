import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/profile/Profile'
import Portfolio from './components/portfolio/Portfolio'
import 'normalize.css/normalize.css'
import './css/main.css'

ReactDOM.render(
  <Profile />,
  document.getElementById('profile')
)

// ReactDOM.render(
//   <Portfolio />,
//   document.getElementById('portfolio')
// )
