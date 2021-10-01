import * as styles from './style.css'
import { createSignal, useContext } from 'solid-js'
import { t } from '../../i18n'
import { useColorScheme } from './context'
import { Radio } from '..'

export const ColorSchemeSwitcher = () => {
  const [scheme, , { setDarkTheme, setLightTheme, setAutoTheme }] =
    useColorScheme()

  return (
    <>
      <fieldset class={styles.fieldset}>
        <legend class={styles.legend}>
          {t(['color scheme switcher', 'Scheme'])}
        </legend>
        <Radio
          id="light-theme-radio"
          name="color-scheme"
          checked={scheme() === 'light'}
          onChange={setLightTheme}
        >
          {t(['color scheme switcher', 'Light'])}
        </Radio>
        <Radio
          id="auto-theme-radio"
          name="color-scheme"
          checked={scheme() === 'auto'}
          onChange={setAutoTheme}
        >
          {t(['color scheme switcher', 'System'])}
        </Radio>
        <Radio
          id="dark-theme-radio"
          name="color-scheme"
          checked={scheme() === 'dark'}
          onChange={setDarkTheme}
        >
          {t(['color scheme switcher', 'Dark'])}
        </Radio>
      </fieldset>
    </>
  )
}
