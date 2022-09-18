import { isServer } from '~/lib/constants'
import { t } from '../../i18n'
import { Select } from '..'

export const LanguageSwitcher = () => {
  const savedLocale = isServer ? 'en' : localStorage.getItem('locale')

  const setLocale = (lang: string) => {
    if (savedLocale === lang) return

    lang === 'auto'
      ? localStorage.removeItem('locale')
      : localStorage.setItem('locale', lang)
    location.reload()
  }

  return (
    <Select
      title={t('settings.3')}
      onChange={e => setLocale(e.currentTarget.value)}
    >
      <option selected={savedLocale === 'ru'} value="ru">
        Русский
      </option>
      <option selected={savedLocale === null} value="auto">
        {t('settings.4')}
      </option>
      <option selected={savedLocale === 'en'} value="en">
        English
      </option>
    </Select>
  )
}
