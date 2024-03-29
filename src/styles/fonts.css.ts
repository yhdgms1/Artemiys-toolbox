import { globalFontFace } from '@vanilla-extract/css'

/* cyrillic-ext */
globalFontFace('Raleway', {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(/fonts/raleway/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2')`,
  unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
})

/* cyrillic */
globalFontFace('Raleway', {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(/fonts/raleway/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2')`,
  unicodeRange: `U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
})

/** cyrillic + -ext fallack */
globalFontFace('RalewayFallback', {
  fontStyle: 'normal',
  src: `local('Arial')`,
  ascentOverride: `94.00%`,
  descentOverride: `23.40%`,
  lineGapOverride: `0.00%`,
  sizeAdjust: `100.00%`,
  unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
})

/* latin-ext */
globalFontFace('Raleway', {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(/fonts/raleway/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2')`,
  unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
})

/* latin */
globalFontFace('Raleway', {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `url(/fonts/raleway/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2')`,
  unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
})

/** latin + -ext fallack */
globalFontFace('RalewayFallback', {
  fontStyle: 'normal',
  src: `local('Arial')`,
  ascentOverride: `92.39%`,
  descentOverride: `23.00%`,
  lineGapOverride: `0.00%`,
  sizeAdjust: `101.74%`,
  unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
})
