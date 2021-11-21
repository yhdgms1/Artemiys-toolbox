import { style } from '@vanilla-extract/css'
import { vars, fonts } from '../../styles/theme.css'

export const select = style({
  fontFamily: fonts.serif,
  outline: 'none',
  padding: '.35rem .45rem',
  margin: '.4rem',
  background: vars.background[0],
  color: vars.color[0],
  border: `.063rem solid ${vars.border[0]}`,
  borderRadius: '.75rem',
  maxWidth: `calc(90vw - .8rem)`,
  ':hover': {
    borderColor: vars.border[1],
  },
  ':focus': {
    borderColor: vars.border[1],
  },
  '@supports': {
    '(-webkit-appearance: none)': {
      WebkitAppearance: 'none',
      appearance: 'none',
      backgroundColor: vars.background[1],
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right .2rem top 50%, 0 0`,
      backgroundSize: `2rem auto, 100%`,
      // backgroundImage: vars.icons['arrow-down'],
    },
  },
})

export const title = style({
  margin: '.5rem 0 0 .5rem',
})

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
