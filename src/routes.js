import React from 'react'
import { Switch, Route } from 'react-router-dom'

let paths = require.context('./views', true, /(?<!Styles)\.js$/).keys()

let routes = paths.map((path, i) => {
  let thisComponent = path.split('/')[1]
  let correctedPath = path.replace(/^./, '')
  return (
    <Route
      exact
      key={i + path}
      path={`/${thisComponent}`}
      component={require(`./views${correctedPath}`).default} />
  )
})

export default function Routes() {
  return (
    <Switch>
      {routes}
    </Switch>
  )
}