// @refresh reload
import { FileRoutes } from 'solid-start/root'
import { ColorSchemeProvider } from '~/components/ColorSchemeSwitcher/context'

import * as styles from '~/styles/index.css'
import * as appStyles from '~/styles/app.css'
import { useLocation, Routes } from 'solid-app-router'
import { ErrorBoundary, Suspense, createEffect } from 'solid-js'
import { Portal } from 'solid-js/web'
import {
  Unknown,
  ColorSchemeSwitcher,
  Settings,
  LanguageSwitcher,
  Header,
  Link,
} from '~/components'
import { useColorScheme } from '~/components/ColorSchemeSwitcher/context'
import { UpdateDialog } from '~/components/UpdateDialog'

import './styles/fonts.css'
import 'disgraceful-ui/style'

import Default from './routes/index'

const BasicRoutes = (): any => {
  return [{ path: '/', component: Default }]
}

const App = () => {
  const location = useLocation()

  const { className } = useColorScheme()

  createEffect(() => (document.body.className = className()))

  return (
    <>
      <Header>
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
          <Suspense fallback={<>{/* @todo: fancy loading indicator here */}</>}>
            <Routes>
              <BasicRoutes />
              <FileRoutes />
            </Routes>
          </Suspense>
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
