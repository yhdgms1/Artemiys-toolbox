import { Routes, Route } from 'solid-app-router'
import { lazy } from 'solid-js'
import Home from '../pages/home'
import { NotFound } from '../components'

const TransliterationId = lazy(() => import('../pages/transliteration/[id]'))

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={Home} />
    <Route
      path="/characters-count"
      element={lazy(() => import('../pages/characters-count'))}
    />
    <Route
      path="/repeat-something-n-times"
      element={lazy(() => import('../pages/repeat-something-n-times'))}
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
    <Route path="/swagify" element={lazy(() => import('../pages/swagify'))} />
    <Route
      path="/string-backwards"
      element={lazy(() => import('../pages/string-backwards'))}
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
      path="/cheap-sluts/picture"
      element={lazy(() => import('../pages/cheap-sluts/picture'))}
    />
    <Route
      path="/cheap-sluts/picture-vk"
      element={lazy(() => import('../pages/cheap-sluts/picture-vk'))}
    />
    <Route
      path="/text-case-changer"
      element={lazy(() => import('../pages/text-case-changer'))}
    />
    <Route
      path="/chat-dot-replacer"
      element={lazy(() => import('../pages/chat-dot-replacer'))}
    />
    <Route path="/vibrator" element={lazy(() => import('../pages/vibrator'))} />
    <Route path="**" element={NotFound} />
  </Routes>
)
