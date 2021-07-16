import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'
export { big_text } from '../../styles/index.css'

export const option = style({
  fontFamily: vars.font.serif,
})

export const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})
