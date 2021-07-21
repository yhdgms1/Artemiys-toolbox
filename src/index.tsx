import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './app'
import './styles.css'
render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.body
)
