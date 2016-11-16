import React, { Component } from 'react'
import Header from './components/Header/Header'
import {Link} from 'react-router'

import states from './data'

class App extends Component {
  render() {

    var createItem = function(item, index) {
      return <Link
                key={'it' + index}
                to={'/work/' + item.id} >
                {item.title}
            </Link>;
    };

    return (
      <div>
        <Header />
        {/* {states.work.map(createItem)} */}
        {this.props.children}
      </div>
    )
  }
}

export default App
