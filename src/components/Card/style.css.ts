import { style } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'

export const title = style({
  fontWeight: 500,
  fontVariationSettings: `'wght' 500`,
  fontSize: '1.2em',
  color: vars.color[0],
})

export const card = style({
  transition:
    'box-shadow cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s, border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s',
  padding: '1.55rem 1.3rem',
  borderRadius: '.25rem',
  border: `.063rem solid ${vars.border[0]}`,
  background: vars.background[2],
  textDecoration: 'none',
  position: 'relative',
  filter: `drop-shadow(.094rem .094rem .188rem #1c1c1c10)`,
  ':hover': {
    borderColor: vars.border[1],
    boxShadow: `inset 0 0 0 .3rem #ffe0e9`,
  },
  ':focus-within': {
    borderColor: vars.border[1],
    boxShadow: `inset 0 0 0 .3rem #ffe0e9`,
    transition: 'none', // transition makes it impossible to highlight an element by simply holding down Tab
  },
  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '.6rem',
      width: '100%',
    },
    '(prefers-color-scheme: dark)': {
      filter: `drop-shadow(.125rem .125rem .313rem #1c1c1c)`,
      ':hover': {
        boxShadow: `inset 0 0 0 .3rem #ff9ebb`,
      },
      ':focus-within': {
        boxShadow: `inset 0 0 0 .3rem #ff9ebb`,
      },
    },
  },
})

export const description = style({
  color: `${vars.color[0]} !important`,
  textDecoration: 'none',
  ':focus': {
    outline: 'transparent',
  },
  '::before': {
    transition: 'opacity cubic-bezier(.455, .03, .515, .955) 150ms',
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
