import { Portal, render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './app'
import { ColorSchemeProvider } from './components/ColorSchemeSwitcher/context'
import { UpdateDialog } from './components/UpdateDialog'

import './styles/fonts.css'

render(
  () => (
    <ColorSchemeProvider>
      <Router>
        <App />
      </Router>
      <Portal>
        <UpdateDialog />
      </Portal>
    </ColorSchemeProvider>
  ),
  document.body
)
