import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import { Switch, Route } from 'react-router-dom'


import styles from '../Tabs/TabsStyles'

// Automatically build tabs and routes from components
let paths = require.context('../../tabs', true, /(?<!Styles)\.js$/).keys()
let tabNames = []
let routes = paths.map((path, i) => {
  let component = path.split('/')[1]
  let componentPath = path.replace(/^./, '')
  tabNames.push(component)
  return (
    <Route
      exact
      key={i + path}
      path={`/${component}`}
      component={require(`../../tabs${componentPath}`).default} />
  )
})

function Navigation({ match, classes: { selected, container } }) {
  let tabs = []
  if (tabNames.length) {
    tabs = tabNames.map((tab, i) => {
      if (tab === match.params.tab) {
        return (
          <div
            key={`${tab + i}`}
            className={selected}>
            {tab}
          </div>
        )
      } else {
        return (
          <Link
            key={`${tab + i}`}
            to={`/${tab}`}>
            <div>{tab}</div>
          </Link>
        )
      }
    })
  }

  return (
    <div>
      <div className={container}>
        {tabs}
      </div>
      <Switch>
        {routes}
        <Route
          path='/'
          render={props => {
            props.history.push('/Home')
            return null
          }} />
      </Switch>
    </div>
  )
}

export default injectSheet(styles)(Navigation)