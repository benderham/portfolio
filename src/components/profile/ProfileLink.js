import React, { Component } from 'react'

class ProfileLink extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank">{this.props.text}</a>
    )
  }
}

export default ProfileLink
