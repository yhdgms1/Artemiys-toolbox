import type { Component, Accessor } from 'solid-js'
import { createSignal, createContext, useContext } from 'solid-js'
import { light_theme, dark_theme } from '../../styles/theme.css'

const ColorSchemeContext = createContext()

const saveScheme = scheme => localStorage.setItem('color-scheme', scheme)
const savedScheme = localStorage.getItem('color-scheme') || 'auto'

const isColorSchemesSupported =
  window.matchMedia('(prefers-color-scheme)').media !== 'not all'
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

export const ColorSchemeProvider: Component<{}> = props => {
  const [scheme, setScheme] = createSignal(savedScheme)
  const [className, setClassName] = createSignal(light_theme)

  function onPrefersColorSchemeChanges(e: MediaQueryListEvent) {
    if (scheme() !== 'auto') return

    setClassName(e.matches ? dark_theme : light_theme)
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

    isColorSchemesSupported
      ? setClassName(darkModeMediaQuery.matches ? dark_theme : light_theme)
      : setClassName(light_theme)
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
        }

        typeof darkModeMediaQuery.addEventListener === 'function'
          ? darkModeMediaQuery.addEventListener(
              'change',
              onPrefersColorSchemeChanges
            )
          : darkModeMediaQuery.addListener(onPrefersColorSchemeChanges)
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

export const useColorScheme = () => useContext(ColorSchemeContext)
