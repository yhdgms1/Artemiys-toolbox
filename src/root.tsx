// @refresh reload
import { Routes } from 'solid-start/components'
import './styles/fonts.css'
import { ColorSchemeProvider } from '~/components/ColorSchemeSwitcher/context'

import * as styles from '~/styles/index.css'
import * as appStyles from '~/styles/app.css'
import { useLocation } from 'solid-app-router'
import { ErrorBoundary, createEffect } from 'solid-js'
import { Portal } from 'solid-js/web'
import {
  Unknown,
  ColorSchemeSwitcher,
  Settings,
  LanguageSwitcher,
  Header,
  Link,
} from '~/components'
import clsx from 'clsx'
import { useColorScheme } from '~/components/ColorSchemeSwitcher/context'
import { UpdateDialog } from '~/components/UpdateDialog'

const App = () => {
  const location = useLocation()

  const { className } = useColorScheme()

  createEffect(() => (document.body.className = className()))

  return (
    <>
      <Header>
        <nav>
          <h1>
            <Link
              href="/"
              class={appStyles.title}
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
      </Header>
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
