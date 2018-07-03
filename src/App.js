import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'

import Header from './views/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Routes from './routes'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Navigation />
          <Routes />
        </div>
      </HashRouter>
    )
  }
} 