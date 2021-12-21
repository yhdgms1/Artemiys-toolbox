import rosetta from 'rosetta'
import dict from './dictionary'

const i18n = rosetta(dict)

const savedLocale = localStorage.getItem('locale')

const isRussian =
  savedLocale === null
    ? navigator.language.toLowerCase().includes('ru')
    : savedLocale === 'ru'

document.documentElement.setAttribute('lang', isRussian ? 'ru' : 'en')

i18n.locale(isRussian ? 'ru' : 'en')

export const { t, locale, set, table } = i18n
