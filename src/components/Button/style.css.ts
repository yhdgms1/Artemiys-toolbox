import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const button = style({
  margin: '1.12rem',
  height: '2.7rem',
  minWidth: '13rem',
  borderRadius: '.375rem',
  cursor: 'pointer',
  filter: vars.filter[0],
  border: `.063rem solid ${vars.border[0]}`,
  background: vars.background[3],
  color: vars.color[0],
  transform: `scale(1)`,
  transition: `transform .2s ease`,
  textRendering: 'optimizeLegibility',
  ':hover': {
    filter: vars.filter[1],
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
