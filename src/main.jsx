import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/Store.jsx'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

createRoot(document.getElementById('root')).render(
  <ApiProvider store={store}>
    <App />
  </ApiProvider>,
)
