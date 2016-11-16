import React, { Component } from 'react'
import states from './../../data'

const notfound = {
  id: '404',
  title: 'Page Not Found',
  image: '../spud-image.jpg',
  text: 'Page Not Found LOL'
}

class Work extends Component {
  constructor(props) {
    super(props)

    const getWork = function(x) {
      return x.id === props.params.workid
    }

    let matchingStates = states.work.filter(getWork)
    this.state = (matchingStates.length <= 0) ? notfound : matchingStates[0]
  }

  render() {
    console.log(this.state);
    return (
      <div className="col-sm-6 col-sm-offset-4 about__text">
        <h2>{this.state.title}</h2>
      </div>
    )
  }
}

export default Work
