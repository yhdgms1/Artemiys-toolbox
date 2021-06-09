import type { Component } from 'solid-js'
import { Link, Route, useRouter } from 'solid-app-router'
import { css } from 'linaria'
import * as styles from './styles/shared'
import clsx from 'clsx'

const title = css`
  font-size: 1.625em;
  font-weight: bold;
  line-height: 1.1;
  margin: 0.92307692em 0;
  color: unset;
`

const no_underline = css`
  text-decoration: none;
`

const nav = css`
  margin: 0.92307692em 1rem;
`

const App: Component = () => {
  const [router] = useRouter()

  return (
    <>
      <nav class={nav}>
        <h1>
          <Link
            href="/"
            class={clsx(
              title,
              styles.link,
              router.location === '/' ? no_underline : ''
            )}
          >
            Artemiy's Toolbox
          </Link>
        </h1>
      </nav>
      <main class={router.location === '/' ? styles.main : styles.main_layout}>
        <Route />
      </main>
    </>
  )
}

export default App
