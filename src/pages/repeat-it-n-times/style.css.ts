import { style } from '@vanilla-extract/css'

export const input = style({
  margin: '0 0 0.5em 0',
  boxSizing: 'border-box',
  border: 'unset',
  background: 'unset',
  borderRadius: '.375rem',
  padding: '0.25rem',
  '::placeholder': {
    color: '#333',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
      ':focus': {
        outlineColor: '#ccc',
      },
      '::placeholder': {
        color: '#ccc',
      },
    },
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
