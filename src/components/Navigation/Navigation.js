import React from 'react'
import { Link } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite'

import stylesBox from './NavigationStyles.js'

export default function Navigation(props) {
    console.log(props.currentView)

    const styles = StyleSheet.create(stylesBox)

    return (
        <div className={css(styles.nav)}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}