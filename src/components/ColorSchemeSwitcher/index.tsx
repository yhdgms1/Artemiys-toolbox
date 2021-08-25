import * as styles from './style.css'
import { createSignal, createEffect } from 'solid-js'
import clsx from 'clsx'
import { light_theme, dark_theme } from '../../styles/theme.css'

const getSavedScheme = () => localStorage.getItem('color-scheme')
const saveScheme = scheme => localStorage.setItem('color-scheme', scheme)
const clearScheme = () => localStorage.removeItem('color-scheme')

const isColorSchemesSupported =
  window.matchMedia('(prefers-color-scheme)').media !== 'not all'
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const savedScheme = getSavedScheme()

export const ColorSchemeSwitcher = () => {
  const [className, setClassName] = createSignal(null)
  const [scheme, setScheme] = createSignal(savedScheme)

  function setDarkTheme() {
    darkModeMediaQuery.removeEventListener(
      'change',
      onPrefersColorSchemeChanges
    )
    setClassName(dark_theme)
    saveScheme('dark')
    setScheme('dark')
  }

  function setLightTheme() {
    darkModeMediaQuery.removeEventListener(
      'change',
      onPrefersColorSchemeChanges
    )
    setClassName(light_theme)
    saveScheme('light')
    setScheme('light')
  }

  function setAutoTheme() {
    clearScheme()
    setScheme(null)

    if (!isColorSchemesSupported) {
      setClassName(light_theme)
    } else {
      if (darkModeMediaQuery.matches) {
        setClassName(dark_theme)
      } else {
        setClassName(light_theme)
      }

      darkModeMediaQuery.addEventListener('change', onPrefersColorSchemeChanges)
    }
  }

  function onPrefersColorSchemeChanges(e) {
    if (e.matches) {
      setClassName(dark_theme)
    } else {
      setClassName(light_theme)
    }
  }

  if (savedScheme === 'light') {
    setLightTheme()
  } else if (savedScheme === 'dark') {
    setDarkTheme()
  } else {
    setAutoTheme()
  }

  createEffect(() => {
    document.body.className = className() // yeah that rough
  })

  return (
    <fieldset class={styles.switcher}>
      <legend class={styles.switcher__legend}>Схема</legend>
      <input
        class={clsx(styles.switcher__radio, styles.switcher__radio__light)}
        type="radio"
        name="color-scheme"
        id="light"
        aria-label="Светлая"
        checked={scheme() === 'light'}
        onChange={setLightTheme}
      />
      <input
        class={clsx(styles.switcher__radio, styles.switcher__radio__auto)}
        type="radio"
        name="color-scheme"
        id="auto"
        aria-label="Системная"
        checked={scheme() === null}
        onChange={setAutoTheme}
      />
      <input
        class={clsx(styles.switcher__radio, styles.switcher__radio__dark)}
        type="radio"
        name="color-scheme"
        id="dark"
        aria-label="Тёмная"
        checked={scheme() === 'dark'}
        onChange={setDarkTheme}
      />
      <div class={styles.switcher__status}></div>
    </fieldset>
  )
}
