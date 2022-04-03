import { t } from '~/i18n'
import { useColorScheme } from './context'
import { Select } from '..'

export const ColorSchemeSwitcher = () => {
  const { scheme, setTheme } = useColorScheme()

  return (
    <Select
      title={t(['color scheme switcher', 'Scheme'])}
      onChange={e => setTheme(e.currentTarget.value)}
    >
      <option selected={scheme() === 'light'} value="light">
        {t(['color scheme switcher', 'Light'])}
      </option>
      <option selected={scheme() === 'auto'} value="auto">
        {t(['color scheme switcher', 'System'])}
      </option>
      <option selected={scheme() === 'dark'} value="dark">
        {t(['color scheme switcher', 'Dark'])}
      </option>
    </Select>
  )
}
