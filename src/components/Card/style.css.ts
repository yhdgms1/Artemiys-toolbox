import { style } from '@vanilla-extract/css'

export const title = style({
  fontWeight: 500,
  fontVariationSettings: `'wght' 500`,
  fontSize: 'larger',
  color: '#000',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
    },
  },
})

export const description = style({
  color: '#000',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
    },
  },
})

export const card = style({
  transition:
    'background .2s cubic-bezier(0.445, 0.05, 0.55, 0.95), border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s, transform .2s cubic-bezier(.4,0,.2,1)',
  padding: '.3em',
  borderRadius: '.25rem',
  border: '1px solid #ececec',
  background: '#fff',
  textDecoration: 'none',
  position: 'relative',
  ':hover': {
    borderColor: '#ffc2d4',
    background: '#ffe0e9',
  },
  ':focus': {
    borderColor: '#ffc2d4',
    background: '#ffe0e9',
  },
  ':active': {
    borderColor: '#ff9ebb',
    background: '#ffc2d4',
  },
  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '1rem',
      width: '100%',
    },
    '(prefers-color-scheme: dark)': {
      background: '#1e1e1e',
      borderColor: '#393939',
      ':hover': {
        borderColor: '#e69ab0',
        background: '#ff9ebb',
      },
      ':focus': {
        borderColor: '#e69ab0',
        background: '#ff9ebb',
        outline: 'transparent',
      },
      ':active': {
        background: '#fd8aac',
      },
    },
  },
})

export const cardContainer = style({
  padding: '1.25rem 1rem',
  height: '100%',
  width: '100%',
  background: '#fff',
  borderRadius: '.125rem',
  '::after': {
    content: `''`,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    opacity: 0,
    background: '#ff7aa2',
    transition: 'opacity 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: '#1e1e1e',
    },
  },
  selectors: {
    [`${card}:active &::after`]: {
      opacity: 0.2,
    },
  },
})
