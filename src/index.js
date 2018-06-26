import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'

import App from './App'
import store from './redux/store'
import './index.css'

const theme = {
    text: 'black',
    backgroundGreen: '#007F71',
    stoeyGreen: '#49C46B',
    accentGreen: '#ACD7AB',
    darkGray: '#3D3D3D',
    border: '#D0D0D0',
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
    , document.getElementById('root'))