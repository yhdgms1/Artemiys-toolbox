import { style } from '@vanilla-extract/css'

export const label = style({
  margin: '.5rem',
})

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
})

export const input = style({
  fontFamily: 'var(--font-serif)',
  outline: 'none',
  padding: '.35rem .45rem',
  margin: '.4rem',
  background: '#0000',
  border: '2px solid #ececec',
  borderRadius: '12px',
  width: '45vw',
  maxWidth: `calc(90vw - .8rem)`,
  ':hover': {
    border: '2px solid #ffc2d4',
  },
  ':focus': {
    border: '2px solid #ffc2d4',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
      border: '2px solid #3b3b3b',
      ':hover': {
        border: '2px solid #e69ab0',
      },
      ':focus': {
        border: '2px solid #e69ab0',
      },
    },
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
