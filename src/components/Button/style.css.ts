import { style } from '@vanilla-extract/css'

export const button = style({
  margin: '1.12rem',
  height: '2.7rem',
  width: '13rem',
  borderRadius: '.375rem',
  cursor: 'pointer',
  filter: `drop-shadow(.094rem .094rem .188rem #1c1c1c20)`,
  border: '.063rem solid #1111112d',
  background: '#f5f5f5',
  color: '#323130',
  transform: `scale(1)`,
  transition: `transform .2s cubic-bezier(.4,0,.2,1)`,
  textRendering: 'optimizeLegibility',
  ':hover': {
    filter: `drop-shadow(.125rem .125rem .313rem #1c1c1c30)`,
  },
  ':active': {
    transform: `scale(.97)`,
  },
  '::before': {
    content: `''`,
    display: 'inline-block',
    height: '2.7rem',
    verticalAlign: 'middle'
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      filter: `drop-shadow(.125rem .125rem .313rem #1c1c1c)`,
      ':hover': {
        filter: `drop-shadow(.263rem .263rem .375rem #1c1c1c)`,
      },
      border: '.063rem solid #ffffff2e',
      background: '#252525',
      color: '#d5ded7',
    },
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
  '@supports': {
    '(-moz-appearance:none)': {
      filter: 'none',
      ':hover': {
        filter: 'none',
      },
      transition: 'none',
    },
  },
})

export const copyButton = style({
  cursor: 'copy !important',
})
