import type { RouteDefinition } from 'solid-app-router'

import { lazy } from 'solid-js'
import Home from './pages/home'
import { NotFound } from './pages/__errors'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/character-count',
    component: lazy(() => import('./pages/character-count')),
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
    path: '/string-backwards',
    component: lazy(() => import('./pages/string-backwards')),
  },
  {
    path: '/aspect-ratio-calculator',
    component: lazy(() => import('./pages/aspect-ratio-calculator')),
  },
  {
    path: '/cheap-sluts',
    component: lazy(() => import('./pages/cheap-sluts')),
  },
  {
    path: '/cheap-sluts/using-vk',
    component: lazy(() => import('./pages/cheap-sluts/using-vk')),
  },
  {
    path: '/cheap-sluts/manually',
    component: lazy(() => import('./pages/cheap-sluts/manually')),
  },
  {
    path: '**',
    component: NotFound,
  },
]
