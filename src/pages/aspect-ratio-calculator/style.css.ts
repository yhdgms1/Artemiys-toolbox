import { style } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'
export { heading2 } from '../../styles/index.css'

export const option = style({
  fontFamily: fonts.serif,
})

export const row = style({
  display: 'flex',
  alignItems: 'center',
})
