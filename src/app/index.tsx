import * as styles from '../styles/index.css'
import * as appStyles from './style.css'
import { Link, useLocation } from 'solid-app-router'
import { ErrorBoundary } from 'solid-js'
import { Unknown } from '../pages/__errors'
import { AppRoutes } from './routes'
import clsx from 'clsx'

const App = () => {
  const location = useLocation()

  return (
    <>
      <nav class={appStyles.nav}>
        <h1>
          <Link
            href="/"
            class={clsx(
              appStyles.title,
              styles.link,
              location.pathname === '/' ? appStyles.no_underline : ''
            )}
          >
            Artemiy's Toolbox
          </Link>
        </h1>
      </nav>
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
