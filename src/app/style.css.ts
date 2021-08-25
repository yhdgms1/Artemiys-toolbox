import { style, globalStyle } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const title = style({
  fontSize: '1.875em',
  lineHeight: '1.2em',
  fontWeight: 500,
  fontVariationSettings: `'wght' 600`,
  color: `${vars.color[0]} !important`,
})

export const no_underline = style({
  textDecoration: 'none',
})

export const header = style({
  margin: '.92em 1rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

globalStyle('body', {
  background: vars.background[0],
  color: vars.color[0],
})

globalStyle('html, body, *, *::after, *::before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: `'Raleway', sans-serif`,
  fontSize: '1em',
  lineHeight: 1.5,
})

globalStyle('*, *:active, *:hover', {
  '@media': {
    '(prefers-reduced-motion)': {
      filter: 'none',
      transition: 'none',
    },
  },
})

globalStyle(':root', {
  colorScheme: 'light dark',
})
