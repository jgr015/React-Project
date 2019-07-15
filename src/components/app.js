import React, { Component } from 'react';

import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>This is something</h1>
        <PortfolioContainer />
      </div>
    );
  }
}
