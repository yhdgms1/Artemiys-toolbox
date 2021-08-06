import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const textarea = style({
  fontSize: 'inherit',
  fontFamily: vars.font.serif,
  marginBottom: '.5em',
  padding: '0.4rem',
  boxSizing: 'border-box',
  border: '.063rem solid #ccc',
  borderRadius: '.344rem',
  width: '90%',
  resize: 'vertical',
  overflowX: 'hidden',
  minHeight: '25vh',
  '::placeholder': {
    color: '#333',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: '#191919',
      borderColor: '#393939',
      color: '#eee',
      ':focus': {
        outlineColor: '#ccc',
      },
      '::placeholder': {
        color: '#ccc',
      },
    },
    'screen and (max-width: 640px)': {
      resize: 'none',
    },
  },
})
