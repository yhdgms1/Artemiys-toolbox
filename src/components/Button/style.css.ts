import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const button = style({
  margin: '1.12rem',
  height: '2.7rem',
  minWidth: '13rem',
  borderRadius: '.375rem',
  cursor: 'pointer',
  filter: `drop-shadow(.094rem .094rem .188rem #1c1c1c10)`,
  border: `.063rem solid ${vars.border[0]}`,
  background: vars.background[3],
  color: vars.color[0],
  transform: `scale(1)`,
  transition: `transform .2s ease`,
  textRendering: 'optimizeLegibility',
  ':hover': {
    filter: `drop-shadow(.094rem .094rem .188rem #1c1c1c20)`,
  },
  ':active': {
    transform: `scale(.97)`,
  },
  '::before': {
    content: `''`,
    display: 'inline-block',
    height: '2.7rem',
    verticalAlign: 'middle',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      filter: `drop-shadow(.125rem .125rem .313rem #1c1c1c)`,
      ':hover': {
        filter: `drop-shadow(.263rem .263rem .375rem #1c1c1c)`,
      },
    },
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
  '@supports': {
    '(-moz-appearance:none)': {
      transition: 'none',
    },
  },
})

export const copy = style({
  cursor: 'copy !important',
})
