import { style } from '@vanilla-extract/css'

export const button = style({
  margin: '1.124rem',
  height: '2.7rem',
  width: '13rem',
  fontSize: '16px',
  borderRadius: '7px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  boxShadow:
    '0px 3.2px 7.2px rgba(0, 0, 0, 0.13), 0px 0.6px 1.8px rgba(0, 0, 0, 0.11)',
  border: '1px solid #1111112d',
  background: '#f2f2f2',
  color: '#323130',
  willChange: 'transform',
  transform: `scale(1)`,
  transition: `all .2s cubic-bezier(.4,0,.2,1)`,
  ':hover': {
    boxShadow:
      '0px 6.4px 14.4px rgba(0, 0, 0, 0.13), 0px 1.2px 3.6px rgba(0, 0, 0, 0.11)',
  },
  ':active': {
    transform: `scale(.95)`,
  },
  ':active:focus': {
    transform: `scale(.95)`,
  },
  ':active:hover': {
    transform: `scale(.95)`,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      border: '1px solid #ffffff2e',
      background: '#252525',
      color: '#d5ded7',
    },
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
})
