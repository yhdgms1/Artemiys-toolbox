import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const input = style({
  margin: '0 0 .5em 0',
  border: 'unset',
  background: 'unset',
  borderRadius: '.375rem',
  padding: '.25rem',
  color: vars.color[0],
  outlineColor: vars.color[0],
  '::placeholder': {
    color: vars.color[1],
  },
  '@media': {
    'screen and (max-width: 640px)': {
      textAlign: 'center',
      '::-webkit-input-placeholder': {
        textAlign: 'center',
      },
      '::-moz-placeholder': {
        textAlign: 'center',
      },
    },
  },
})
