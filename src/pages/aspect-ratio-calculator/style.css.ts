import { style } from '@vanilla-extract/css'

export const customSelectStyle = style({
  width: '45vw',
  '@media': {
    '(max-width: 640px)': {
      width: '90vw',
    },
    '(min-width: 1024px)': {
      width: `calc(35vw - .8rem)`,
    },
  },
})
