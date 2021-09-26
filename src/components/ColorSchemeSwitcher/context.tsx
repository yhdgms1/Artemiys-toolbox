import type { Component, Accessor } from 'solid-js'
import { createSignal, createContext, useContext } from 'solid-js'
import { light_theme, dark_theme } from '../../styles/theme.css'
import { createGlobalSignal } from 'solid-utils'

const [className, setClassName] = createGlobalSignal(light_theme)

const ColorSchemeContext = createContext()

const saveScheme = scheme => localStorage.setItem('color-scheme', scheme)
const savedScheme = localStorage.getItem('color-scheme') || 'auto'

const isColorSchemesSupported =
  window.matchMedia('(prefers-color-scheme)').media !== 'not all'
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

export const ColorSchemeProvider: Component<{}> = props => {
  const [scheme, setScheme] = createSignal(savedScheme)
  const [className, setClassName] = createSignal<string>(light_theme)

  function onPrefersColorSchemeChanges(e: MediaQueryListEvent) {
    if (scheme() !== 'auto') return

    if (e.matches) {
      setClassName(dark_theme)
    } else {
      setClassName(light_theme)
    }
  }

  function setDarkTheme() {
    setClassName(dark_theme)
    saveScheme('dark')
    setScheme('dark')
  }

  function setLightTheme() {
    setClassName(light_theme)
    saveScheme('light')
    setScheme('light')
  }

  function setAutoTheme() {
    localStorage.removeItem('color-scheme')
    setScheme('auto')

    if (!isColorSchemesSupported) {
      setClassName(light_theme)
    } else {
      if (darkModeMediaQuery.matches) {
        setClassName(dark_theme)
      } else {
        setClassName(light_theme)
      }
    }
  }

  const store = [
    scheme,
    className,
    {
      init() {
        if (savedScheme === 'light') {
          setLightTheme()
        } else if (savedScheme === 'dark') {
          setDarkTheme()
        } else {
          setAutoTheme()

          darkModeMediaQuery.addEventListener(
            'change',
            onPrefersColorSchemeChanges
          )
        }
      },
      setDarkTheme,
      setLightTheme,
      setAutoTheme,
    },
  ]

  return (
    <ColorSchemeContext.Provider value={store}>
      {props.children}
    </ColorSchemeContext.Provider>
  )
}

export function useColorScheme() {
  return useContext(ColorSchemeContext)
}
