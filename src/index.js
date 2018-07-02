import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import App from './App'
import store from './redux/store'
import './index.css'

library.add(faSearch, faBars)

const theme = {
    backgroundGreen: '#007F71',
    stoeyGreen: '#49C46B',
    accentGreen: '#ACD7AB',
    darkGray: '#3D3D3D',
    borderGray: '#D0D0D0',
    sideMargin: '.9em'
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
    , document.getElementById('root'))