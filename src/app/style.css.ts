import { style } from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

export const title = style({
  fontSize: '30px',
  lineHeight: '36px',
  fontWeight: 500,
  fontVariationSettings: `'wght' 600`,
  color: 'unset',
})

export const no_underline = style({
  textDecoration: 'none',
})

export const nav = style({
  margin: '0.92307692em 1rem 0',
})

globalStyle('html, body, *, *::after, *::before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: `'Raleway', sans-serif`,
  fontSize: '1em',
  lineHeight: 1.5,
})

globalStyle('body', {
  width: '100%',
  background: '#fff',
  contentVisibility: 'auto',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: '#141414',
      color: '#eee',
    },
  },
})

globalStyle('*, *:active, *:hover', {
  '@media': {
    '(prefers-reduced-motion)': {
      filter: 'none',
      transition: 'none',
    },
  },
})
