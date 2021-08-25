import * as styles from './style.css'
import { createSignal, createEffect } from 'solid-js'
import clsx from 'clsx'
import { light_theme, dark_theme } from '../../styles/theme.css'
import { t } from '../../i18n'

const saveScheme = scheme => localStorage.setItem('color-scheme', scheme)

const isColorSchemesSupported =
  window.matchMedia('(prefers-color-scheme)').media !== 'not all'
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const savedScheme = localStorage.getItem('color-scheme')

export const ColorSchemeSwitcher = () => {
  const [className, setClassName] = createSignal(null)
  const [scheme, setScheme] = createSignal(savedScheme)

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
    setScheme(null)

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

  function onPrefersColorSchemeChanges(e) {
    if (scheme() !== null) return

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

    darkModeMediaQuery.addEventListener('change', onPrefersColorSchemeChanges)
  }

  createEffect(() => {
    document.body.className = className() // yeah that rough
  })

  return (
    <fieldset class={styles.switcher}>
      <legend class={styles.switcher__legend}>
        {t(['color scheme switcher', 'Scheme'])}
      </legend>
      <input
        class={clsx(styles.switcher__radio, styles.switcher__radio__light)}
        type="radio"
        name="color-scheme"
        id="light"
        aria-label={t(['color scheme switcher', 'Light'])}
        checked={scheme() === 'light'}
        onChange={setLightTheme}
      />
      <input
        class={clsx(styles.switcher__radio, styles.switcher__radio__auto)}
        type="radio"
        name="color-scheme"
        id="auto"
        aria-label={t(['color scheme switcher', 'System'])}
        checked={scheme() === null}
        onChange={setAutoTheme}
      />
      <input
        class={clsx(styles.switcher__radio, styles.switcher__radio__dark)}
        type="radio"
        name="color-scheme"
        id="dark"
        aria-label={t(['color scheme switcher', 'Dark'])}
        checked={scheme() === 'dark'}
        onChange={setDarkTheme}
      />
      <div class={styles.switcher__status}></div>
    </fieldset>
  )
}
