import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
import { App } from 'App'
import { Provider } from 'react-redux'
import { store } from 'store'
import './styles/index.scss'
import { Testing } from 'testing/Testing'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
)

reportWebVitals()
