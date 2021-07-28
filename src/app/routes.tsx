import { Routes, Route } from 'solid-app-router'
import { lazy } from 'solid-js'
import Home from '../pages/home'
import { NotFound } from '../pages/__errors'

const TransliterationId = lazy(() => import('../pages/transliteration/[id]'))

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={Home} />
    <Route
      path="/characters-count"
      element={lazy(() => import('../pages/characters-count'))}
    />
    <Route
      path="/repeat-it-n-times"
      element={lazy(() => import('../pages/repeat-it-n-times'))}
    />
    <Route
      path="/transliteration"
      element={lazy(() => import('../pages/transliteration'))}
    />
    <Route path="/transliteration/:id" element={<TransliterationId />} />
    <Route
      path="/punto-switcher"
      element={lazy(() => import('../pages/punto-switcher'))}
    />
    <Route path="/uwuifier" element={lazy(() => import('../pages/uwuifier'))} />
    <Route path="/swagify" element={lazy(() => import('../pages/swagify'))} />
    <Route
      path="/string-backwards"
      element={lazy(() => import('../pages/string-backwards'))}
    />
    <Route
      path="/aspect-ratio-calculator"
      element={lazy(() => import('../pages/aspect-ratio-calculator'))}
    />
    <Route
      path="/cheap-sluts"
      element={lazy(() => import('../pages/cheap-sluts'))}
    />
    <Route
      path="/cheap-sluts/using-vk"
      element={lazy(() => import('../pages/cheap-sluts/using-vk'))}
    />
    <Route
      path="/cheap-sluts/manually"
      element={lazy(() => import('../pages/cheap-sluts/manually'))}
    />
    <Route
      path="/cheap-sluts/remove"
      element={lazy(() => import('../pages/cheap-sluts/remove'))}
    />
    <Route
      path="/text-case-changer"
      element={lazy(() => import('../pages/text-case-changer'))}
    />
    <Route path="**" element={NotFound} />
  </Routes>
)