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
    '0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%)',
  border: '1px solid #1111112d',
  background: '#f2f2f2',
  color: '#323130',
  ':hover': {
    boxShadow:
      '0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%)',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      boxShadow: '0 5px 10px 0 rgb(58 59 66 / 37%)',
      border: '1px solid #ffffff2e',
      background: '#252525',
      color: '#d5ded7',
      ':hover': {
        boxShadow: '0 1px 4px 0 rgb(58 59 66 / 37%)',
      },
    },
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
})
