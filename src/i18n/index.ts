import rosetta from 'rosetta'
import dict from './dictionary'

const i18n = rosetta(dict)

const isRussian: boolean = navigator.language.toLowerCase().includes('ru')

document.documentElement.setAttribute('lang', isRussian ? 'ru' : 'en')

i18n.locale(isRussian ? 'ru' : 'en')

export const { t, locale, set, table } = i18n
