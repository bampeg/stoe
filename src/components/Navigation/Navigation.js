import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './NavigationStyles.js'

function Navigation(props) {
    const { classes } = props

    return (
        <div className={classes.nav}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}

export default injectSheet(styles)(Navigation)