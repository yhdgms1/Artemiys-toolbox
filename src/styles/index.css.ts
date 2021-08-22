import { style } from '@vanilla-extract/css'

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
      paddingBottom: '4rem',
    },
  },
})

export const main_layout = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const text = style({
  margin: '.4rem 0',
  fontSize: '1.2em',
  textAlign: 'center',
})

export const link = style({
  color: 'unset',
  ':hover': {
    textDecorationStyle: 'dotted',
  },
})

export const responsive_container = style({
  '@media': {
    'screen and (max-width: 1055px)': {
      display: 'grid',
      gridTemplateColumns: '2fr 2fr',
    },
    'screen and (max-width: 640px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

export const heading = style({
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  fontWeight: 400,
  fontVariationSettings: `'wght' 400`,
})

export const heading2 = style({
  fontSize: '1.625em',
  lineHeight: '1.154em',
  fontWeight: 'normal',
  padding: '0 0 .7rem',
  textAlign: 'center',
})
