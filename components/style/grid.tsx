import styled from '@emotion/styled'
import React from 'react'

export const Row = styled.div`
  display: flex;
  margin: 0 -20px;
`

interface ColSpacing {
  left?: number
  size?: number
  right?: number
  padding?: string
}

interface ColProps extends ColSpacing {
  tablet?: ColSpacing
  desktop?: ColSpacing
}

/**
 * A 4-col column layout
 */
export const Col: React.FC<ColProps> = (props) => {
  const properties = ({ left, size, right, padding }: ColSpacing) => `
    margin: 0 ${right ? right * 25 : 0}% 0 ${left ? left * 25 : 0}%;
    width: ${size * 25}%;
    padding: 0 ${padding ?? '20px'};
  `

  const Component = styled.div<ColProps>`
    ${properties(props)}

    ${(p) => p.theme.mediaQuery.tablet} {
      margin: 0 ${(p) => p.right * 25}% 0 ${(p) => p.left * 25}%;
      width: ${(p) => p.size * 25}%;
    }
  `

  return <Component>{props.children}</Component>
}
