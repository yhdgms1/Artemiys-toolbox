import type { Component, Accessor } from 'solid-js'
import { createSignal, createContext, useContext } from 'solid-js'
import { light_theme, dark_theme } from '../../styles/theme.css'

interface ColorSchemeContextInterface {
  scheme: Accessor<string>
  className: Accessor<string>
  setTheme: (theme: string) => void
}

const ColorSchemeContext = createContext<ColorSchemeContextInterface>({
  scheme: () => 'auto',
  className: () => light_theme,
  setTheme: (theme: string) => {},
})

function saveScheme(scheme: string) {
  localStorage.setItem('scheme', scheme)
}

const savedScheme = localStorage.getItem('color-scheme') || 'auto'

const isColorSchemesSupported =
  window.matchMedia('(prefers-color-scheme)').media !== 'not all'
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

export const ColorSchemeProvider: Component = props => {
  const [scheme, setScheme] = createSignal(savedScheme)
  const [className, setClassName] = createSignal(light_theme)

  function onPrefersColorSchemeChanges(e: MediaQueryListEvent) {
    if (scheme() !== 'auto') return

    setClassName(e.matches ? dark_theme : light_theme)
  }

  const setTheme = (theme: string) => {
    saveScheme(theme)
    setScheme(theme)

    if (theme === 'auto') {
      isColorSchemesSupported
        ? setClassName(darkModeMediaQuery.matches ? dark_theme : light_theme)
        : setClassName(light_theme)
    } else {
      setClassName(theme === 'dark' ? dark_theme : light_theme)
    }
  }

  setTheme(savedScheme)

  typeof darkModeMediaQuery.addEventListener === 'function'
    ? darkModeMediaQuery.addEventListener('change', onPrefersColorSchemeChanges)
    : darkModeMediaQuery.addListener(onPrefersColorSchemeChanges)

  return (
    <ColorSchemeContext.Provider
      value={{
        scheme,
        className,
        setTheme,
      }}
    >
      {props.children}
    </ColorSchemeContext.Provider>
  )
}

export const useColorScheme = () =>
  useContext<ColorSchemeContextInterface>(ColorSchemeContext)
