import React from 'react'
import injectSheet from 'react-jss'

import Search from '../../components/Search/Search'
import styles from './HeaderStyles'

// import Tryangle from '../../components/triangle'

function Header(props) {
  const { classes } = props


  return (
    <div className={classes.container}>

      <div className={classes.stoey}>
        <h1>stoe</h1>
        <div/>
      </div>

      <Search />
    </div>
  )
}

export default injectSheet(styles)(Header)