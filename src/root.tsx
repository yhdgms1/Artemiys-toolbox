// @refresh reload
import type { JSX } from 'solid-js';
import { ErrorBoundary, Suspense, lazy, createComponent } from 'solid-js'
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

import Home from './routes/index'

const Root = () => {
  const { className } = useColorScheme()
  const location = useLocation()

  const routes = Object.entries(import.meta.glob('./routes/**/*.tsx')).reduce((acc, curr) => {
    const path = curr[0];
    const fn = curr[1] as () => Promise<{ default: () => JSX.Element; }>;

    const splitted = path.split('.');
    const start = splitted.slice(1, splitted.length - 1)[0].slice(8).replace('index', '/').replace('//', '/').replace('[id]', ':id');

    if (start !== '/') {
      acc.push({ path: start, component: () => createComponent(() => lazy(fn), {})})
    }

    return acc;
  }, [] as { path: string; component: () => JSX.Element; }[])

  routes.push({ path: '/', component: Home })

  return (
    <div id="root" class={className()}>
      <Header location={location} />
      <main
        class={location.pathname === '/' ? styles.main : styles.main_layout}
        role="main"
      >
        <ErrorBoundary fallback={Unknown}>
          <Suspense>
            <Routes>
              {routes as unknown as JSX.Element}
            </Routes>
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
