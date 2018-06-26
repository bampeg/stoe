import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from './views/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Home from './views/Home/Home'
import Products from './views/Products/Products'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
} 