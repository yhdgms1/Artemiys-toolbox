import { t } from '../../i18n'
import { Select } from '..'

export const LanguageSwitcher = () => {
  const savedLocale = localStorage.getItem('locale')

  const setLocale = (lang: string) => {
    if (savedLocale === lang) return

    lang === 'auto'
      ? localStorage.removeItem('locale')
      : localStorage.setItem('locale', lang)
    window.location.reload()
  }

  return (
    <Select
      title={t(['settings', 'Language'])}
      onChange={e => setLocale(e.currentTarget.value)}
    >
      <option selected={savedLocale === 'ru'} value="ru">
        Русский
      </option>
      <option selected={savedLocale === null} value="auto">
        {t(['settings', 'Auto'])}
      </option>
      <option selected={savedLocale === 'en'} value="en">
        English
      </option>
    </Select>
  )
}
