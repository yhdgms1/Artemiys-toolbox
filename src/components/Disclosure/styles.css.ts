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

const disclosureButtonIconSize = '2rem'

export const disclosureButton = style({
  position: 'relative',
  backgroundColor: vars.background[1],
  color: vars.color[0],
  border: `.063rem solid ${vars.border[0]}`,
  filter: vars.filter[0],
  padding: '.25rem .35rem',
  borderRadius: '.45rem',
  width: '100%',
  minHeight: disclosureButtonIconSize,
  cursor: 'pointer',
  ':hover': {
    filter: vars.filter[1],
  },
})

export const disclosurePanel = style({
  display: 'flex',
  flexDirection: 'column',
})

export const disclosureButtonIcon = style({
  width: disclosureButtonIconSize,
  height: disclosureButtonIconSize,
  position: 'absolute',
  right: '.25rem',
  top: 0,
})

export const disclosureOpenIcon = style({
  transform: 'rotate(180deg)',
})
