import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

import styles from './NavigationStyles.js'
import { changeTab } from '../../redux/reducer'

function Navigation(props) {
    const { classes, changeTab, currentTab } = props

    return (
        <nav className={classes.container}>
            <Link
                className={currentTab === 'home' ? classes.selected : null}
                onClick={() => changeTab('home')}
                to='/'>
                <div>Home</div>
            </Link>
            <Link
                className={currentTab === 'products' ? classes.selected : null}
                onClick={() => changeTab('products')}
                to='/products'>
                <div>Products</div>
            </Link>
        </nav>
    )
}

const mapStateToProps = state => state
export default injectSheet(styles)(connect(mapStateToProps, { changeTab })(Navigation))