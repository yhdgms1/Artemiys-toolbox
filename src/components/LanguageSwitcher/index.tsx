import * as styles from './style.css'
import { t } from '../../i18n'
import { Radio } from '..'

export const LanguageSwitcher = () => {
  const savedLocale = localStorage.getItem('locale')

  const setLocale = (lang: string | null) => {
    lang === null
      ? localStorage.removeItem('locale')
      : localStorage.setItem('locale', lang)
    window.location.reload()
  }

  const name = 'language'

  return (
    <fieldset class={styles.fieldset}>
      <legend class={styles.legend}>{t(['settings', 'Language'])}</legend>
      <Radio
        id={`${name}-radio-ru`}
        name={name}
        checked={savedLocale === 'ru'}
        onChange={() => setLocale('ru')}
      >
        Русский
      </Radio>
      <Radio
        id={`${name}-radio-auto`}
        name={name}
        checked={savedLocale === null}
        onChange={() => setLocale(null)}
      >
        {t(['settings', 'Auto'])}
      </Radio>
      <Radio
        id={`${name}-radio-en`}
        name={name}
        checked={savedLocale === 'en'}
        onChange={() => setLocale('en')}
      >
        English
      </Radio>
    </fieldset>
  )
}
