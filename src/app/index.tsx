import * as styles from '../styles/index.css'
import * as appStyles from './style.css'
import { Link, useRoutes, useLocation } from 'solid-app-router'
import { ErrorBoundary } from 'solid-js'
import { Unknown } from '../pages/__errors'
import { routes } from './routes'
import clsx from 'clsx'

const App = () => {
  const location = useLocation()

  const Routes = useRoutes(routes)

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
          <Routes />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default App
