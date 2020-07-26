export const baseFontSize = 16

export interface Theme {
  fontSize: (factor?: number) => string
  lineHeight: (factor?: number) => string
  navbarHeight: string
}

export const theme: Theme = {
  fontSize: (factor: number = 1) => `${baseFontSize * factor}px`,
  lineHeight: (factor: number = 1) => `${baseFontSize * 1.5 * factor}px`,
  navbarHeight: `${baseFontSize * 5}px`,
}
