import { Link, Route, useRouter } from 'solid-app-router'
import * as styles from '../styles/index.css'
import * as appStyles from './style.css'
import clsx from 'clsx'
import { ErrorBoundary } from 'solid-js'
import { Unknown } from '../pages/__errors'

const App = () => {
  const [router] = useRouter()

  return (
    <>
      <nav class={appStyles.nav}>
        <h1>
          <Link
            href="/"
            class={clsx(
              appStyles.title,
              styles.link,
              router.location === '/' ? appStyles.no_underline : ''
            )}
          >
            Artemiy's Toolbox
          </Link>
        </h1>
      </nav>
      <main class={router.location === '/' ? styles.main : styles.main_layout}>
        <ErrorBoundary fallback={Unknown}>
          <Route />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default App
