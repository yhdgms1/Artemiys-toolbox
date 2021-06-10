import { Link, Route, useRouter } from 'solid-app-router'
import * as styles from '../styles/index.css'
import * as appStyles from './style.css'
import clsx from 'clsx'
import { ErrorBoundary } from 'solid-js'

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
        <ErrorBoundary
          fallback={
            <div>
              <h2 class={clsx(styles.big_text, styles.text)}>
                Произошла ошибка
              </h2>
              <p class={styles.text}>Возможно, ваш браузер устарел</p>
            </div>
          }
        >
          <Route />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default App
