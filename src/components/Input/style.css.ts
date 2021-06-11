import { style } from '@vanilla-extract/css'

export const input = style({
  fontFamily: 'var(--font-serif)',
  outline: 'none',
  padding: '.35rem .45rem',
  margin: '.4rem',
  background: '#0000',
  border: '2px solid #ececec',
  borderRadius: '12px',
  maxWidth: `calc(calc(100vw / 2) - .8rem)`,
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
  },
})
