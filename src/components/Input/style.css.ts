import { style } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'

export const title = style({
  margin: '.5rem 0 .4rem 0',
  display: 'block',
})

export const label = style({
  margin: '.4rem',
  width: `calc(100% - .8rem)`,
})

export const input = style({
  fontFamily: fonts.serif,
  color: vars.color[0],
  outline: 'none',
  padding: '.35rem .45rem',
  background: '#0000',
  border: `.063rem solid ${vars.border[0]}`,
  borderRadius: '.75rem',
  width: '100%',
  backgroundColor: vars.background[1],
  ':hover': {
    borderColor: vars.border[1],
  },
  ':focus': {
    borderColor: vars.border[1],
  },
  '::placeholder': {
    color: vars.color[1],
  },
})
