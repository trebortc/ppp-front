import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import esES from 'antd/lib/locale-provider/es_ES'
import 'moment/locale/es'
import { ConfigProvider } from 'antd'

/**
 * Este es el punto de entrada del sistema
 * todas las peticiones empiezan aqui y renderiza
 * el componente App
 */
ReactDOM.render(
  // <React.StrictMode>
  <ConfigProvider locale={esES}>
    <App />
  </ConfigProvider>,
  // </React.StrictMode>
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
