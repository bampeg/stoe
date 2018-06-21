import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'

export default function Navigation(props) {
    console.log(props.currentView)

    return (
        <div className="nav">
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}
