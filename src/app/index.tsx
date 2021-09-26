import * as styles from '../styles/index.css'
import * as appStyles from './style.css'
import { Link, useLocation } from 'solid-app-router'
import { ErrorBoundary, createEffect } from 'solid-js'
import { Unknown, ColorSchemeSwitcher } from '../components'
import { AppRoutes } from './routes'
import clsx from 'clsx'
import { useColorScheme } from '../components/ColorSchemeSwitcher/context'

const App = () => {
  const location = useLocation()

  const [, className, { init }] = useColorScheme()

  init()

  createEffect(() => (document.body.className = className()))

  return (
    <>
      <header class={appStyles.header}>
        <nav>
          <h1>
            <Link
              href="/"
              class={clsx(appStyles.title, styles.link)}
              classList={{
                [appStyles.no_underline]: location.pathname === '/',
              }}
            >
              Artemiy's Toolbox
            </Link>
          </h1>
        </nav>
        <ColorSchemeSwitcher />
      </header>
      <main
        class={location.pathname === '/' ? styles.main : styles.main_layout}
        role="main"
      >
        <ErrorBoundary fallback={Unknown}>
          <AppRoutes />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default App
