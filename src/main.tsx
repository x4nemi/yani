import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy'
// import './index.css'

const theme = extendTheme({ cssVarPrefix: 'demo' })
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider
				defaultMode='dark'
				theme={theme}
				colorSchemeSelector="#demo_dark-mode-by-default"
				modeStorageKey="demo_dark-mode-by-default"
				disableNestedContext
			>
        <CssBaseline />
    <App />
      </CssVarsProvider>
  </React.StrictMode>,
)
