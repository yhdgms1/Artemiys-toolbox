import { isServer } from '~/lib/constants'

import { rosetta } from './service'
import dict from './dictionary'

const i18n = rosetta(dict)

const savedLocale = isServer ? 'en' : localStorage.getItem('locale')

const isRussian =
  savedLocale === null
    ? navigator.language.toLowerCase().includes('ru')
    : savedLocale === 'ru'

if (!isServer) {
  document.documentElement.setAttribute('lang', isRussian ? 'ru' : 'en')
}

i18n.locale(isRussian ? 'ru' : 'en')

export const { t, locale, set, table } = i18n
