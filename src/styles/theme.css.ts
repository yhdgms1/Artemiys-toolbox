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
  filter: {
    0: `drop-shadow(.094rem .094rem .188rem #1c1c1c10)`,
    1: `drop-shadow(.094rem .094rem .188rem #1c1c1c20)`,
  },
  icons: {
    'arrow-down': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E%0A")`,
  },
  boxShadow: {
    0: '#ffe0e9',
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
  filter: {
    0: `drop-shadow(.125rem .125rem .313rem #1c1c1c)`,
    1: `drop-shadow(.263rem .263rem .375rem #1c1c1c)`,
  },
  icons: {
    'arrow-down': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23eee' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E%0A")`,
  },
  boxShadow: {
    0: '#ff9ebb',
  },
})
