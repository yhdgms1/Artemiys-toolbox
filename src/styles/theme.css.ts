import { createGlobalTheme, createTheme } from '@vanilla-extract/css'

export const fonts = createGlobalTheme(':root', {
  serif: `system-ui, ui-sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
})

export const [light_theme, vars] = createTheme({
  color: {
    0: '#000',
    1: '#666',
  },
  background: {
    0: '#fff',
    1: '#fff',
    2: '#fff',
    3: '#f5f5f5',
  },
  border: {
    0: '#ececec',
    1: '#ffc2d4',
  },
})

export const dark_theme = createTheme(vars, {
  color: {
    0: '#eee',
    1: '#ccc',
  },
  background: {
    0: '#141414',
    1: '#191919',
    2: '#1e1e1e',
    3: '#252525',
  },
  border: {
    0: '#393939',
    1: '#e69ab0',
  },
})
