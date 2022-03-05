import { style } from '@vanilla-extract/css'

export const link = style({
  color: 'unset',
  ':hover': {
    textDecorationStyle: 'dotted',
  },
})

export const large = style({
  fontSize: '1.625em',
  lineHeight: '1.154em',
  fontWeight: 'normal',
  padding: '0 0 .7rem',
  textAlign: 'center',
})

export const margin = style({
  margin: `.6rem auto`,
})
