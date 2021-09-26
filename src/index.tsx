import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './app'
import { ColorSchemeProvider } from './components/ColorSchemeSwitcher/context'

import './styles/fonts.css'

render(
  () => (
    <ColorSchemeProvider>
      <Router>
        <App />
      </Router>
    </ColorSchemeProvider>
  ),
  document.body
)
