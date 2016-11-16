import React, { Component } from 'react'
import states from './../../data'

const notfound = {
  id: '404',
  title: 'Page Not Found',
  text: 'Page Not Found LOL'
}

class WorkItem extends Component {
  constructor(props) {
    super(props)

    const getWork = function(x) {
      return x.id === props.params.workid
    }

    let matchingStates = states.work.filter(getWork)
    this.state = (matchingStates.length <= 0) ? notfound : matchingStates[0]
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-4 about__text">
        <h2>{this.state.title}</h2>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default WorkItem
