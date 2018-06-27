import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './NavigationStyles.js'

function Navigation(props) {
    const { classes } = props

    return (
        <nav className={classes.container}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </nav>
    )
}

export default injectSheet(styles)(Navigation)