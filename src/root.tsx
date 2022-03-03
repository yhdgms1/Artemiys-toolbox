// @refresh reload
import { Routes } from 'solid-start/components'
import './styles/fonts.css'
import { ColorSchemeProvider } from '~/components/ColorSchemeSwitcher/context'

import * as styles from '~/styles/index.css'
import * as appStyles from '~/styles/app.css'
import { Link, useLocation } from 'solid-app-router'
import { ErrorBoundary, createEffect } from 'solid-js'
import { Portal } from 'solid-js/web'
import {
  Unknown,
  ColorSchemeSwitcher,
  Settings,
  LanguageSwitcher,
} from '~/components'
import clsx from 'clsx'
import { useColorScheme } from '~/components/ColorSchemeSwitcher/context'
import { UpdateDialog } from '~/components/UpdateDialog'

const App = () => {
  const location = useLocation()

  const { init, className } = useColorScheme()

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
        <Settings>
          <ColorSchemeSwitcher />
          <LanguageSwitcher />
        </Settings>
      </header>
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

export default function Root() {
  return (
    <ColorSchemeProvider>
      <App />
      <Portal>
        <UpdateDialog />
      </Portal>
    </ColorSchemeProvider>
  )
}
