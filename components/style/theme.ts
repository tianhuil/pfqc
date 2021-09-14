/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMediaPredicate } from 'react-media-hook'

export const baseFontSize = 16

// ,

export const theme = {
  fontSize: (factor = 1) => `${baseFontSize * factor}px`,
  lineHeight: (factor = 1) => `${baseFontSize * 1.5 * factor}px`,
  navbarHeight: `${baseFontSize * 5}px`,
  color: {
    orange: '#e77500', // 'rgb(237, 106, 31)', // '#e77500'
    orangeFaded: 'rgb(237, 124, 58)', // '#e77500e0' on white background
    white: '#fff',
    black: '#091133',
  },
  mediaQuery: {
    medium: '@media screen and (min-width: 480px)',
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1024px)',
  },
}

export const useIsTablet = () => useMediaPredicate('(min-width: 768px)')
export const useIsdesktop = () => useMediaPredicate('(min-width: 1024px)')

export type Theme = typeof theme
