import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWithThemeProvider from './App.jsx'
import './index.css'
import { ColorModeScript } from './ColorModeScript'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
    <AppWithThemeProvider />
  </React.StrictMode>,
)
