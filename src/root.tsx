// @refresh reload

import { ErrorBoundary, Suspense } from 'solid-js'
import { Body, Html, Scripts } from 'solid-start'
import { FileRoutes } from 'solid-start/root'
import { useLocation, Routes } from '@solidjs/router'
import { Unknown, Header } from '~/components'

import {
  ColorSchemeProvider,
  useColorScheme,
} from '~/components/ColorSchemeSwitcher'
import { UpdateDialog } from '~/components/UpdateDialog'

import * as styles from '~/styles/index.css'

import './styles/fonts.css'
import 'disgraceful-ui/style'

const Root = () => {
  const { className } = useColorScheme()
  const location = useLocation()

  return (
    <Html lang="en">
      <Body>
        <div id="root" class={className()}>
          <Header location={location} />
          <main
            class={location.pathname === '/' ? styles.main : styles.main_layout}
            role="main"
          >
            <ErrorBoundary fallback={Unknown}>
              <Suspense>
                <Routes>
                  <FileRoutes />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <UpdateDialog />
        </div>
        <Scripts />
      </Body>
    </Html>
  )
}

export default function () {
  return (
    <ColorSchemeProvider>
      <Root />
    </ColorSchemeProvider>
  )
}
