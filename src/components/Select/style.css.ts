import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const select = style({
  fontFamily: vars.font.serif,
  outline: 'none',
  padding: '.35rem .45rem',
  margin: '.4rem',
  background: vars.background.light.primary,
  border: '1px solid #ececec',
  borderRadius: '12px',
  width: '45vw',
  maxWidth: `calc(90vw - .8rem)`,
  ':hover': {
    borderColor: '#ffc2d4',
  },
  ':focus': {
    borderColor: '#ffc2d4',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
      borderColor: '#3b3b3b',
      background: '#171717',
      ':hover': {
        borderColor: '#e69ab0',
      },
      ':focus': {
        borderColor: '#e69ab0',
      },
    },
    'screen and (max-width: 640px)': {
      width: '90vw',
    },
    'screen and (min-width: 1024px)': {
      width: `calc(35vw - .8rem)`,
    },
  },
  '@supports': {
    '(-webkit-appearance: none)': {
      WebkitAppearance: 'none',
      appearance: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right .2rem top 50%, 0 0`,
      backgroundSize: `2rem auto, 100%`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E%0A")`,
      '@media': {
        '(prefers-color-scheme: dark)': {
          backgroundColor: '#191919',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23eee' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E%0A")`,
        },
      },
    },
  },
})
