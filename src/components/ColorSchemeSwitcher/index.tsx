import { t } from '~/i18n'
import { useColorScheme, ColorSchemeProvider } from './context'
import { Select } from '..'

export const ColorSchemeSwitcher = () => {
  const { scheme, setTheme } = useColorScheme()

  return (
    <Select
      title={t('color-scheme-switcher.0')}
      onChange={e => setTheme(e.currentTarget.value)}
    >
      <option selected={scheme() === 'light'} value="light">
        {t('color-scheme-switcher.1')}
      </option>
      <option selected={scheme() === 'auto'} value="auto">
        {t('color-scheme-switcher.2')}
      </option>
      <option selected={scheme() === 'dark'} value="dark">
        {t('color-scheme-switcher.3')}
      </option>
    </Select>
  )
}

export { useColorScheme, ColorSchemeProvider }
