import { style } from '@vanilla-extract/css'

export const h1 = style({
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  fontWeight: 400,
  fontVariationSettings: `'wght' 400`,
})

export const h2 = style({
  fontSize: '1.625em',
  lineHeight: '1.154em',
  fontWeight: 'normal',
  padding: '0 0 .7rem',
  textAlign: 'center',
})
