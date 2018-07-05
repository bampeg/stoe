import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Tabs from './components/Tabs/Tabs'
import Header from './components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HashRouter>
          <Switch>
            <Route path={'/:tab'} component={Tabs} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
} 