import { style } from '@vanilla-extract/css'
export { big_text } from '../../styles/index.css'

export const option = style({
  fontFamily: 'var(--font-serif)',
})

export const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})
