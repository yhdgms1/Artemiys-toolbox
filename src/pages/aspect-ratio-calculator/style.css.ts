import { style } from '@vanilla-extract/css'
export { row, big_text } from '../../styles/index.css'

export const label = style({
  margin: '.5rem',
})

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
})

export const option = style({
  fontFamily: 'var(--font-serif)',
})
