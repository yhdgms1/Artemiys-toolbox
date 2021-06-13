import { style } from '@vanilla-extract/css'

export const main = style({
  padding: '1rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '1rem',
  rowGap: '1rem',
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
  margin: '0.4rem 0',
  fontSize: '1.2rem',
  textAlign: 'center',
})

export const big_text = style({
  fontSize: '26px',
  lineHeight: '30px',
  fontWeight: 'normal',
  padding: '0 0 .7rem',
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
    'screen and (max-width: 640px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

export const input = style({
  margin: '0 0 0.5em 0',
  boxSizing: 'border-box',
  border: 'unset',
  background: 'unset',
  borderRadius: '6px',
  padding: '0.25rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
      ':focus': {
        outlineColor: '#ccc',
      },
    },
    'screen and (max-width: 640px)': {
      textAlign: 'center',
      '::-webkit-input-placeholder': {
        textAlign: 'center',
      },
      '::-moz-placeholder': {
        textAlign: 'center',
      },
    },
  },
})

export const width_70 = style({
  width: '70vw',
})

export const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export const heading = style({
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  fontWeight: 400,
  fontVariationSettings: `'wght' 400`,
})
