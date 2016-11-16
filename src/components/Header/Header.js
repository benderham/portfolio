import React, { Component } from 'react'
import IconLink from './../IconLink/IconLink'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="it">
        <h1 className="col-sm-4 header__text">
          <span>Hello.</span><br />
          I'm Ben Derham
        </h1>
        <nav className="col-sm-2 col-sm-offset-4 header__social">
          <IconLink url="https://www.behance.net/benb1a3" text="Behance" />
          <IconLink url="https://github.com/benderham" text="GitHub" />
          <IconLink url="http://codepen.io/benderham/" text="Codepen" />
          <IconLink url="https://twitter.com/benderham88" text="Twitter" />
          <IconLink url="https://au.linkedin.com/in/benderham" text="LinkedIn" />
        </nav>
      </div>
    )
  }
}

export default Header
