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
  backgroundColor: vars.background[1],
  color: vars.color[0],
  border: `.063rem solid ${vars.border[0]}`,
  filter: vars.filter[0],
  padding: '.05rem .15rem',
  borderRadius: '.45rem',
  width: '100%',
  cursor: 'pointer',
  ':hover': {
    filter: vars.filter[1],
  },
  display: 'grid',
  gridTemplateColumns: `1fr ${disclosureButtonIconSize}`,
  alignItems: 'center',
})

export const disclosureButtonText = style({
  width: `calc(100% + ${disclosureButtonIconSize})`,
})

export const disclosureButtonIcon = style({
  width: disclosureButtonIconSize,
  height: disclosureButtonIconSize,
})
