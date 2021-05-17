import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'
import { routes } from './routes'
import App from './app'
import './styles.css'
import { I18nProvider } from "./solid-i18n";
import dict from './dictionary';

render(
  () => (
    <I18nProvider dict={dict} locale="ru">
      <Router routes={routes}>
        <App />
      </Router>
    </I18nProvider>
  ),
  document.getElementById('root')
)
