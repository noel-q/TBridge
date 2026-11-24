import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fonts are bundled, so no request leaves the site (see the privacy note in the footer).
import '@fontsource-variable/instrument-sans'
import '@fontsource-variable/jetbrains-mono'
import './styles/quiet-tokens.css'
import './styles/app.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
