import { style } from '@vanilla-extract/css'

export const button = style({
  margin: '1.12rem',
  height: '2.7rem',
  width: '13rem',
  borderRadius: '6px',
  cursor: 'pointer',
  filter: `drop-shadow(1.5px 1.5px 3px #1c1c1c20)`,
  border: '1px solid #1111112d',
  background: '#f5f5f5',
  color: '#323130',
  transform: `scale(1)`,
  transition: `all .2s cubic-bezier(.4,0,.2,1)`,
  textRendering: 'optimizeLegibility',
  ':hover': {
    filter: `drop-shadow(2px 2px 5px #1c1c1c30)`,
  },
  ':active': {
    transform: `scale(.97)`,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      filter: `drop-shadow(2px 2px 5px #1c1c1c)`,
      ':hover': {
        filter: `drop-shadow(4.2px 4.2px 6px #1c1c1c)`,
      },
      border: '1px solid #ffffff2e',
      background: '#252525',
      color: '#d5ded7',
    },
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
})
