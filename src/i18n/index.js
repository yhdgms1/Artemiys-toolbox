import rosetta from "rosetta";
import dict from './dictionary'

const i18n = rosetta(dict);

const user_locale = navigator.language || navigator.userLanguage;

document.documentElement.setAttribute(
  "lang",
  user_locale === "ru" ? "ru" : "en"
);

i18n.locale(user_locale === "ru" ? "ru" : "en");

export const { t, locale, set, table } = i18n;
