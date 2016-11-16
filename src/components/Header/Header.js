import React, { Component } from 'react'
import IconLink from './../IconLink/IconLink'


class Header extends Component {
  render() {
    return (
      <div className="row header__wrap">
        <h1 className="col-sm-4 header__text">
          <span>Hello.</span><br />
          I'm Ben Derham
        </h1>
        <nav className="col-xs-8 col-sm-3 col-sm-offset-4 header__social">
          <IconLink url="https://www.behance.net/benb1a3" text="Behance" iconClass="icon icon--behance"/>
          <IconLink url="https://github.com/benderham" text="GitHub" iconClass="icon icon--github"/>
          <IconLink url="http://codepen.io/benderham/" text="Codepen" iconClass="icon icon--codepen"/>
          <IconLink url="https://twitter.com/benderham88" text="Twitter" iconClass="icon icon--twitter"/>
          <IconLink url="https://au.linkedin.com/in/benderham" text="LinkedIn" iconClass="icon icon--linkedin" />
        </nav>
      </div>
    )
  }
}

export default Header
