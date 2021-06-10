import { style } from '@vanilla-extract/css'

export const title = style({
    fontWeight: 500,
    fontVariationSettings: `'wght' 500`,
    fontSize: 'larger',
    color: '#000',
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: '#eee'
        }
    }
})

export const description = style({
    color: '#000',
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: '#eee'
        }
    }
})