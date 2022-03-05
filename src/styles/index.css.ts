import { style } from '@vanilla-extract/css'
import { fonts } from './theme.css'

export const main = style({
  padding: '1rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  gap: '1rem',
  width: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 640px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: 'env(safe-area-inset-bottom, 4rem)',
    },
  },
})

export const main_layout = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const margin6 = style({
  margin: `.6rem auto`,
})

export const option = style({
  fontFamily: fonts.serif,
})

export const row = style({
  display: 'flex',
  alignItems: 'center',
})
