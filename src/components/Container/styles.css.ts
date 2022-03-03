import { style } from '@vanilla-extract/css'

export const responsive = style({
  '@media': {
    'screen and (max-width: 1055px)': {
      display: 'grid',
      gridTemplateColumns: '2fr 2fr',
    },
    'screen and (max-width: 640px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
})

export const independent = style({
  width: '45vw',
  maxWidth: `calc(100% - .8rem)`,
  '@media': {
    'screen and (max-width: 640px)': {
      width: `90vw`,
    },
    'screen and (min-width: 1024px)': {
      width: `calc(35vw - .8rem)`,
    },
  },
})
