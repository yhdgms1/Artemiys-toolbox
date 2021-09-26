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
      WebkitUserSelect: 'none',
      userSelect: 'none',
    },
    [`${input} + &::before`]: {
      content: `''`,
      display: 'inline-block',
      width: '1.4rem',
      height: '1.4rem',
      flexShrink: 0,
      flexGrow: 0,
      border: `.063rem solid ${vars.border[0]}`,
      borderRadius: '9999px',
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
    },
    [`${input}:focus + &::before`]: {
      borderColor: '#DB6D8C',
      boxShadow: `0 0 0 .063em #DB6D8C`,
    },
    // todo return in when it will be used
    // [`${input}:disabled + &::before`]: {
    //   backgroundColor: '#e9ecef',
    //   borderColor: '#e9ecef',
    //   '@media': {
    //     '(prefers-color-scheme: dark)': {
    //       borderColor: '#242424',
    //       backgroundColor: '#252525',
    //     },
    //   },
    // },
  },
})
