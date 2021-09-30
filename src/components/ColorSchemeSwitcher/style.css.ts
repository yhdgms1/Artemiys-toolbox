import { style } from '@vanilla-extract/css'
import { vars, dark_theme } from '../../styles/theme.css'

const dialogZIndex = 10

export const fieldset = style({
  padding: '.125rem',
  position: 'relative',
  border: 'none',
  width: '100%',
  display: 'flex',
  alignContent: 'flex-start',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})

export const dialog = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: dialogZIndex,
  overflowY: 'auto',
})

export const dialogOverlay = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: '#00000095',
  minHeight: 'calc(100vh + env(safe-area-inset-bottom, 4rem))'
})

export const container = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const dialogPanel = style({
  width: '100%',
  maxWidth: '45vw',
  overflow: 'hidden',
  background: vars.background[0],
  borderRadius: '.75rem',
  zIndex: dialogZIndex + 1,
  padding: '.9rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  '@media': {
    '(max-width: 768px)': {
      maxWidth: '95vw',
    },
  },
})

export const dialogTitle = style({
  fontSize: '1.125em',
  lineHeight: '1.5em',
})

export const button = style({
  appearance: 'none',
  background: 'unset',
  border: 'none',
  cursor: 'pointer',
  color: vars.color[0],
})

export const legend = style({
  marginLeft: '0.5rem',
})
