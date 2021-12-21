import { style } from '@vanilla-extract/css'

export const fieldset = style({
  padding: '.125rem',
  position: 'relative',
  border: 'none',
  width: '100%',
  display: 'flex',
  alignContent: 'flex-start',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})

export const legend = style({
  marginLeft: '0.5rem',
})
