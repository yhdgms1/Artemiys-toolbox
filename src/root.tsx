// @refresh reload
import type { Component } from 'solid-js'
import type { RouteDefinition, RouteSectionProps } from '@solidjs/router'

import { ErrorBoundary, Suspense, createComponent } from 'solid-js'
import { useLocation } from '@solidjs/router'
import { Unknown, Header } from '~/components'

import {
  ColorSchemeProvider,
  useColorScheme,
} from '~/components/ColorSchemeSwitcher'
import { UpdateDialog } from '~/components/UpdateDialog'

import * as styles from '~/styles/index.css'

import './styles/fonts.css'
import 'disgraceful-ui/style'

type Files = Record<`./routes/${string}`, { default: Component }>

const files: Files = import.meta.glob('./routes/**/*.tsx', { eager: true })

const routes = Object.entries(files).reduce((acc, curr) => {
  const [path, { default: cmp }] = curr

  const splitted = path.split('.')
  const filename = splitted[1]

  acc.push({
    path: filename.slice(7).replace('/index', '/').slice(1),
    component: () => createComponent(cmp, {}),
  })

  return acc
}, [] as RouteDefinition[])

import { Router } from '@solidjs/router'

const Root: Component<RouteSectionProps> = (props) => {
  const { className } = useColorScheme()
  const location = useLocation()

  return (
    <div id="root" class={className()}>
      <Header location={location} />
      <main
        class={location.pathname === '/' ? styles.main : styles.main_layout}
        role="main"
      >
        <ErrorBoundary fallback={Unknown}>
          <Suspense>
            {props.children}
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
      <Router root={Root}>
        {routes}
      </Router>
    </ColorSchemeProvider>
  )
}
