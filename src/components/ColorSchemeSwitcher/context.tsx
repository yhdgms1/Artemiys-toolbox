import type { FlowComponent, Accessor } from 'solid-js'
import { createSignal, createContext, useContext } from 'solid-js'
import { light_theme, dark_theme } from '../../styles/theme.css'
import { isServer } from '~/lib/constants'

interface ColorSchemeContextInterface {
  scheme: Accessor<string>
  className: Accessor<string>
  setTheme: (theme: string) => void
}

const ColorSchemeContext = createContext<ColorSchemeContextInterface>({
  scheme: () => 'auto',
  className: () => light_theme,
  setTheme: (_: string) => {},
})

function saveScheme(scheme: string) {
  !isServer && localStorage.setItem('color-scheme', scheme)
}

const getSavedScheme = () => {
  return localStorage.getItem('color-scheme') || 'auto'
}

const savedScheme = isServer ? 'light' : getSavedScheme()

const isColorSchemesSupported = isServer
  ? false
  : matchMedia('(prefers-color-scheme)').media !== 'not all'

const darkMQ = isServer ? null : matchMedia('(prefers-color-scheme: dark)')

export const ColorSchemeProvider: FlowComponent = props => {
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
        ? setClassName(darkMQ!.matches ? dark_theme : light_theme)
        : setClassName(light_theme)
    } else {
      setClassName(theme === 'dark' ? dark_theme : light_theme)
    }
  }

  if (!isServer) {
    setTheme(savedScheme)
    typeof darkMQ!.addEventListener === 'function'
      ? darkMQ!.addEventListener('change', onPrefersColorSchemeChanges)
      : darkMQ!.addListener(onPrefersColorSchemeChanges)
  }

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
