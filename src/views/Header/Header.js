import React from 'react'
import injectSheet from 'react-jss'

import Search from '../../components/Search/Search'
import styles from './HeaderStyles'

// import Tryangle from '../../components/triangle'

function Header(props) {
  const { classes } = props


  return (
    <header className={classes.container}>

      <section className={classes.stoeyLogo}>
        <p>stoe</p>
        <div/>
      </section>

      <Search />
    </header>
  )
}

export default injectSheet(styles)(Header)