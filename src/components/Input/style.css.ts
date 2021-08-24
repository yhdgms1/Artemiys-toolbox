import { style } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'

export const title = style({
  margin: '.5rem 0',
})

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
})

export const label = style({
  margin: '.4rem',
  width: '45vw',
  maxWidth: `calc(90vw - .8rem)`,
  '@media': {
    'screen and (max-width: 640px)': {
      width: `90vw`,
    },
    'screen and (min-width: 1024px)': {
      width: `calc(35vw - .8rem)`,
    },
  },
  selectors: {
    [`${inputContainer} &`]: {
      width: `calc(calc(45vw / 2) - .4rem)`,
      '@media': {
        'screen and (max-width: 640px)': {
          width: `calc(calc(90vw / 2) - .8rem)`,
        },
        'screen and (min-width: 1024px)': {
          width: `calc(calc(35vw / 2) - .8rem)`,
        },
      },
    },
  },
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
