import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const checkbox = style({
  margin: '.5rem',
})

export const input = style({
  position: 'absolute',
  zIndex: 0 - 1,
  opacity: 0,
})

export const label = style({
  selectors: {
    [`${input} + &`]: {
      display: 'inline-flex',
      alignItems: 'center',
      userSelect: 'none',
      WebkitUserSelect: 'none',
    },
    [`${input} + &::before`]: {
      content: `''`,
      display: 'inline-block',
      width: '1.4rem',
      height: '1.4rem',
      flexShrink: 0,
      flexGrow: 0,
      border: `.063rem solid ${vars.border[0]}`,
      borderRadius: '.375rem',
      marginRight: '.5rem',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '100%',
      backgroundColor: vars.background[1],
    },
    [`${input}:not(:disabled):not(:checked) + &:hover::before`]: {
      borderColor: vars.border[1],
    },
    [`${input}:not(:disabled):active + &::before`]: {
      backgroundColor: '#e69ab0',
      borderColor: vars.border[1],
    },
    [`${input}:focus:not(:checked) + &::before`]: {
      borderColor: vars.border[1],
    },
    [`${input}:checked + &::before`]: {
      borderColor: vars.border[1],
      backgroundColor: '#DB6D8C',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75'%3E%3C/path%3E%3C/svg%3E%0A")`,
    },
    [`${input}:focus + &::before`]: {
      borderColor: '#DB6D8C',
      boxShadow: `0 0 0 .063em #DB6D8C`,
    },
    [`${input}:disabled + &::before`]: {
      backgroundColor: '#e9ecef',
      borderColor: '#e9ecef',
      '@media': {
        '(prefers-color-scheme: dark)': {
          borderColor: '#242424',
          backgroundColor: '#252525',
        },
      },
    },
  },
})
