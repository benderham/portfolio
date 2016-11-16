import React, { Component } from 'react'

class IconLink extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank" className={this.props.iconClass} title={this.props.text}>{this.props.text}</a>
    )
  }
}

export default IconLink
