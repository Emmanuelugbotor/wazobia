import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {AppContextProvider} from './hooks/Context';
import {SnackbarProvider} from 'notistack'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <SnackbarProvider maxSnack={3}>
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </AppContextProvider>
  </React.StrictMode>
)
