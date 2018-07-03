import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

import styles from './NavigationStyles.js'
import { changeTab } from '../../redux/reducer'

function Navigation(props) {
    const { classes, changeTab, currentTab, tabNames } = props

    let tabs = []
    if (tabNames.length) {
        tabs = tabNames.map((tab, i) => {
            if (tab === currentTab) {
                return (
                    <div
                        className={classes.selected}
                        key={`${tab + i}`}>
                        {tab}
                    </div>
                )
            } else {
                return (
                    <Link
                        key={`${tab + i}`}
                        onClick={() => changeTab(tab)}
                        to={`/${tab}`}>
                        <div>{tab}</div>
                    </Link>
                )
            }
        })
    }
    
    return (
        <nav className={classes.container}>
            {tabs}
        </nav>
    )
}

const mapStateToProps = state => state
export default injectSheet(styles)(connect(mapStateToProps, { changeTab })(Navigation))