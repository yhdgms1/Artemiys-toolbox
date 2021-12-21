import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const dialogZIndex = 20

export const dialogTitle = style({
  fontSize: '1.125em',
  lineHeight: '1.5em',
})

export const dialog = style({
  position: 'fixed',
  zIndex: dialogZIndex,
  bottom: '.9rem',
  left: '.9rem',
  minWidth: '45vw',
  maxWidth: '100%',
  background: vars.background[1],
  color: vars.color[0],
  borderRadius: '.75rem',
  padding: '.9rem',
  '@media': {
    '(max-width: 768px)': {
      maxWidth: '95vw',
      left: '2.5vw',
      right: '2.5vw',
    },
  },
})

export const dialogOverlay = style({
  zIndex: dialogZIndex - 1,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: '#00000095',
  minHeight: 'calc(100vh + env(safe-area-inset-bottom, 4rem))',
})

export const buttonsContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})
