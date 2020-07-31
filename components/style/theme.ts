import { useMediaPredicate } from 'react-media-hook'

export const baseFontSize = 16

export const theme = {
  fontSize: (factor: number = 1) => `${baseFontSize * factor}px`,
  lineHeight: (factor: number = 1) => `${baseFontSize * 1.5 * factor}px`,
  navbarHeight: `${baseFontSize * 5}px`,
  color: {
    orange: '#e77500',
    white: '#fff',
    black: '#091133',
  },
  mediaQuery: {
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1024px)',
  },
}

export const useIsTablet = () => useMediaPredicate('(min-width: 768px)')
export const useIsdesktop = () => useMediaPredicate('(min-width: 1024px)')

export type Theme = typeof theme
