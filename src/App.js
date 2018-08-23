import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Tabs from './components/Tabs/Tabs';
import Header from './components/Header/Header';
import ThisExample from './components/ThisExample';

export default class App extends Component {
  render() {
    return (
      <div>
        <ThisExample />
        <Header />
        <HashRouter>
          <Switch>
            <Route path={'/:tab'} component={Tabs} />
            <Route path={'/'} component={Tabs} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
} 