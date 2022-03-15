import { style, globalStyle } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'

export const select = style({
  fontFamily: fonts.serif,
  outline: 'none',
  padding: '.35rem .45rem',
  margin: '.4rem',
  background: vars.background[0],
  color: vars.color[0],
  border: `.063rem solid ${vars.border[0]}`,
  borderRadius: '.75rem',
  maxWidth: `calc(90vw - .8rem)`,
  cursor: 'pointer',
  ':hover': {
    borderColor: vars.border[1],
  },
  ':focus': {
    borderColor: vars.border[1],
  },
  '@supports': {
    '(-webkit-appearance: none)': {
      WebkitAppearance: 'none',
      appearance: 'none',
      backgroundColor: vars.background[1],
    },
  },
})

globalStyle(`${select} > option`, {
  fontFamily: fonts.serif,
})

export const title = style({
  margin: '.5rem 0 0 .5rem',
})

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
})

export const icon = style({
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  right: '.45rem',
  top: '2.55rem',
  pointerEvents: 'none',
})
