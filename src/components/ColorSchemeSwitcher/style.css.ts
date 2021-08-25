import { style } from '@vanilla-extract/css'
import { vars, dark_theme } from '../../styles/theme.css'

export const switcher = style({
  padding: '.125rem',
  position: 'relative',
  display: 'table',
  border: 'none',
  // todo figure out how to display on the phone
  '@media': {
    'screen and (max-width: 640px)': {
      display: 'none',
      position: 'absolute',
    },
  },
})

export const switcher__legend = style({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
})

export const switcher__radio = style({
  WebkitAppearance: 'none',
  appearance: 'none',
  display: 'table-cell',
  margin: 0,
  width: '2.5rem',
  height: '2.5rem',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '24px',
  filter: 'invert(0)',
  ':focus': {
    outline: 'none',
  },
  ':checked': {
    filter: 'invert(1)',
  },
  selectors: {
    [`${dark_theme} &`]: {
      filter: 'invert(1)',
    },
    [`${dark_theme} &:checked`]: {
      filter: 'invert(0)',
    },
  },
})

export const switcher__radio__light = style({
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cdefs/%3E%3Ccircle cx='12' cy='12' r='3.25' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 2.75v1.5M17.25 6.75l-1.184 1.184M21.25 12h-1.5M17.25 17.25l-1.184-1.184M12 19.75v1.5M7.934 16.066L6.75 17.25M4.25 12h-1.5M7.934 7.934L6.75 6.75'/%3E%3C/svg%3E")`,
})

export const switcher__radio__auto = style({
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cdefs/%3E%3Ccircle cx='12' cy='12' r='7.25' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3Ccircle cx='12' cy='12' r='2.25' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3C/svg%3E")`,
})

export const switcher__radio__dark = style({
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cdefs/%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M18.25 15.75c-1.015.54-2.02.5-3.25.5A7.25 7.25 0 017.75 9c0-1.23-.04-2.235.5-3.25-2.289 1.219-3.5 3.476-3.5 6.25A7.25 7.25 0 0012 19.25c2.774 0 5.031-1.211 6.25-3.5zM16 4.75C16 6.96 14.96 9 12.75 9 14.96 9 16 11.04 16 13.25 16 11.04 17.04 9 19.25 9 17.04 9 16 6.96 16 4.75z'/%3E%3C/svg%3E")`,
})

export const switcher__status = style({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0 - 1,
  borderRadius: '.75rem',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cdefs/%3E%3Ccircle cx='12' cy='12' r='7.25' fill='currentColor' stroke='currentColor' stroke-width='1.5'/%3E%3C/svg%3E")`,
  backgroundSize: '2.5rem',
  backgroundPosition: 'center',
  filter: 'invert(0)',
  selectors: {
    [`${dark_theme} &`]: {
      filter: 'invert(1)',
    },
    [`${switcher__radio}:focus-visible ~ &`]: {
      boxShadow: '0 0 0 2px black',
    },
    [`${switcher__radio__light}:checked ~ &`]: {
      backgroundPosition: `left .125rem center`,
    },
    [`${switcher__radio__auto}:checked ~ &`]: {
      backgroundPosition: `center center`,
    },
    [`${switcher__radio__dark}:checked ~ &`]: {
      backgroundPosition: `right .125rem center`,
    },
  },
})
