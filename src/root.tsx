// @refresh reload
import type { Component, JSX } from 'solid-js'
import type { RouteProps } from '@solidjs/router'

import { ErrorBoundary, Suspense, createComponent } from 'solid-js'
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

  type Files = Record<`./routes/${string}`, { default: Component }>

  const files: Files = import.meta.glob('./routes/**/*.tsx', { eager: true })

  const routes = Object.entries(files).reduce((acc, curr) => {
    const [path, { default: cmp }] = curr

    const splitted = path.split('.')
    const filename = splitted[1]

    const route = {
      path: filename.slice(7).replace('/index', '/').slice(1),
      component: () => createComponent(cmp, {}),
    }

    return acc.push(route), acc
  }, [] as RouteProps[])

  return (
    <div id="root" class={className()}>
      <Header location={location} />
      <main
        class={location.pathname === '/' ? styles.main : styles.main_layout}
        role="main"
      >
        <ErrorBoundary fallback={Unknown}>
          <Suspense>
            <Routes>{routes as unknown as JSX.Element}</Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <UpdateDialog />
    </div>
  )
}

export default function () {
  return (
    <ColorSchemeProvider>
      <Root />
    </ColorSchemeProvider>
  )
}
