import React from 'react'
import { Link, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

import styles from '../Tabs/TabsStyles'
import { changeTab } from '../../redux/reducer'

// Build tabs and routes from components in ./tabs
let paths = require.context('../../tabs', true, /(?<!Styles)\.js$/).keys()
let tabs = []
let routes = paths.map((path, i) => {
  let thisComponent = path.split('/')[1]
  let correctedPath = path.replace(/^./, '')
  tabs.push(thisComponent)
  return (
    <Route
      exact
      key={i + path}
      path={`/${thisComponent}`}
      component={require(`../../tabs${correctedPath}`).default} />
  )
})

function Navigation(props) {
  const { classes: { selected, container }, tabNames } = props
  let tabs = []
  if (tabNames.length) {
    tabs = tabNames.map((tab, i) => {
      if (tab === props.match.params.tab) {
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
      {routes}
    </div>
  )
}
const mapStateToProps = state => state
export default injectSheet(styles)(connect(mapStateToProps, { changeTab })(Navigation))