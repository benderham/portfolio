import React, { Component } from 'react'

class PortfolioListItem extends Component {
  render() {
    return (
      <div className="portfolio__item">
        {this.props.title}
        {this.props.thumbnail}
        {this.props.link}
      </div>
    )
  }
}

export default PortfolioListItem
