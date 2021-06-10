import type { RouteDefinition } from 'solid-app-router'

import { lazy } from 'solid-js'
import Home from './pages/home'
import NotFound from './pages/__errors/404'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/text-length-counter',
    component: lazy(() => import('./pages/text-length-counter')),
  },
  {
    path: '/repeat-it-n-times',
    component: lazy(() => import('./pages/repeat-it-n-times')),
  },
  {
    path: '/transliteration',
    component: lazy(() => import('./pages/transliteration')),
  },
  {
    path: '/transliteration/:id',
    component: lazy(() => import('./pages/transliteration/[id]')),
  },
  {
    path: '/punto-switcher',
    component: lazy(() => import('./pages/punto-switcher')),
  },
  {
    path: '/uwuifier',
    component: lazy(() => import('./pages/uwuifier')),
  },
  {
    path: '/swagify',
    component: lazy(() => import('./pages/swagify')),
  },
  {
    path: 'string-backwards',
    component: lazy(() => import('./pages/string-backwards')),
  },
  {
    path: '**',
    component: NotFound,
  },
]
