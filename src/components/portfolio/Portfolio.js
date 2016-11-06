import React, { Component } from 'react'
import PortfolioListItem from './PortfolioListItem'
import './css/portfolio.css'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioListItem title="Website" thumbnail="image" link="link" />
      </div>
    )
  }
}

export default Portfolio
