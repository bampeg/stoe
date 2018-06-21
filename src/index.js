import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'

import App from './App'
import store from './redux/store'
import './index.css'

const theme = {
    text: 'black',
    accent: '#00B5FF',
    border: '#D0D0D0',
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
    , document.getElementById('root'))