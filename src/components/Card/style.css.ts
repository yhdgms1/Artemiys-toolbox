import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const title = style({
  fontWeight: 500,
  fontVariationSettings: `'wght' 500`,
  fontSize: '1.2em',
  color: '#000',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
    },
  },
})

export const card = style({
  transition:
    'box-shadow cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s, border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s',
  padding: '1.55rem 1.3rem',
  borderRadius: '.25rem',
  border: '.063rem solid #ececec',
  background: vars.background.light.primary,
  textDecoration: 'none',
  position: 'relative',
  filter: `drop-shadow(.094rem .094rem .188rem #1c1c1c10)`,
  ':hover': {
    borderColor: '#ffc2d4',
    boxShadow: `inset 0 0 0 .3rem #ffe0e9`,
  },
  ':focus-within': {
    borderColor: '#ffc2d4',
    boxShadow: `inset 0 0 0 .3rem #ffe0e9`,
    transition: 'none', // transition makes it impossible to highlight an element by simply holding down Tab
  },
  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '.6rem',
      width: '100%',
    },
    '(prefers-color-scheme: dark)': {
      background: '#1e1e1e',
      borderColor: '#393939',
      filter: `drop-shadow(.125rem .125rem .313rem #1c1c1c)`,
      ':hover': {
        borderColor: '#FFBDD1',
        boxShadow: `inset 0 0 0 .3rem #ff9ebb`,
      },
      ':focus-within': {
        borderColor: '#FFBDD1',
        boxShadow: `inset 0 0 0 .3rem #ff9ebb`,
      },
    },
  },
})

export const description = style({
  color: '#000 !important',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee !important',
    },
  },
  textDecoration: 'none',
  ':focus': {
    outline: 'transparent',
  },
  '::before': {
    transition: 'opacity cubic-bezier(0.455, 0.03, 0.515, 0.955) 150ms',
    background: '#ff7aa2',
    borderRadius: '.15rem',
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    content: `''`,
  },
  selectors: {
    [`${card}:active &::before`]: {
      opacity: 0.2,
    },
    [`${card}:focus-within &::before`]: {
      opacity: 0.2,
    },
  },
})
