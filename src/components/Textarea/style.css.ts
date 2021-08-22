import { style } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'

export const textarea = style({
  fontSize: 'inherit',
  fontFamily: fonts.serif,
  marginBottom: '.5em',
  padding: '.4rem',
  border: `.063rem solid ${vars.border[0]}`,
  borderRadius: '.344rem',
  width: '90%',
  resize: 'vertical',
  overflowX: 'hidden',
  minHeight: '25vh',
  color: vars.color[0],
  outlineColor: vars.color[0],
  background: vars.background[1],
  '::placeholder': {
    color: vars.color[1],
  },
  '@media': {
    'screen and (max-width: 640px)': {
      resize: 'none',
    },
  },
})
