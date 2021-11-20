import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const disclosure = style({
  color: vars.color[0],
  padding: '.45rem',
  background: '#0000',
  border: `.063rem solid ${vars.border[0]}`,
  borderRadius: '.75rem',
  margin: '.4rem',
  width: `calc(100% - .8rem)`,
})

export const disclosureButton = style({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: `right .2rem top 50%, 0 0`,
  backgroundSize: `2rem auto, 100%`,
  backgroundImage: vars.icons['arrow-down'],
  backgroundColor: vars.background[1],
  color: vars.color[0],
  border: `.063rem solid ${vars.border[0]}`,
  filter: vars.filter[0],
  padding: '.25rem .35rem',
  borderRadius: '.45rem',
  width: '100%',
  cursor: 'pointer',
  ':hover': {
    filter: vars.filter[1],
  },
})
