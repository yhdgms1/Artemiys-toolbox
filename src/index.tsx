import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import App from './app'

import './styles/fonts.css'
import './polyfills'

import { light_theme, dark_theme } from './styles/theme.css'

if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  if (darkModeMediaQuery.matches) {
    document.documentElement.classList.add(dark_theme)
  } else {
    document.documentElement.classList.add(light_theme)
  }

  darkModeMediaQuery.addListener(e => {
    const darkModeOn = e.matches

    if (darkModeOn) {
      document.documentElement.classList.remove(light_theme)
      document.documentElement.classList.add(dark_theme)
    } else {
      document.documentElement.classList.remove(dark_theme)
      document.documentElement.classList.add(light_theme)
    }
  })
} else {
  document.documentElement.classList.add(light_theme)
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.body
)
