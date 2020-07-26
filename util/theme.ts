const fontSize = 18

export interface Theme {
  fontSize: string
  navbarHeight: string
}

export const theme: Theme = {
  fontSize: `${fontSize}px`,
  navbarHeight: `${fontSize * 5}px`,
}
