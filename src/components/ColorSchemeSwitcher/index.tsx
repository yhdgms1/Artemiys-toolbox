import * as styles from './style.css'
import { createSignal, useContext } from 'solid-js'
import { t } from '../../i18n'
import { useColorScheme } from './context'
import { Radio } from '..'

export const ColorSchemeSwitcher = () => {
  const [scheme, , { setTheme }] = useColorScheme()

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
          onChange={() => setTheme('light')}
        >
          {t(['color scheme switcher', 'Light'])}
        </Radio>
        <Radio
          id="auto-theme-radio"
          name="color-scheme"
          checked={scheme() === 'auto'}
          onChange={() => setTheme('auto')}
        >
          {t(['color scheme switcher', 'System'])}
        </Radio>
        <Radio
          id="dark-theme-radio"
          name="color-scheme"
          checked={scheme() === 'dark'}
          onChange={() => setTheme('dark')}
        >
          {t(['color scheme switcher', 'Dark'])}
        </Radio>
      </fieldset>
    </>
  )
}
