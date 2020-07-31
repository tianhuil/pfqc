import React from 'react'

import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

import { theme } from './theme'

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 0 -10px;
  ${theme.mediaQuery.tablet} {
    margin: 0 -20px;
  }
`

interface ColSpacing {
  left?: number
  size: number
  right?: number
  top?: string
  bottom?: string
  padding?: string
}

interface ColProps extends ColSpacing {
  tablet?: ColSpacing
  desktop?: ColSpacing
}

const colStyle = (
  { left, size, right, padding }: ColSpacing,
  paddingDefault = '20px'
) => ({
  margin: [0, (right ?? 0) * 25, 0, (left ?? 0) * 25]
    .map((x) => `${x}%`)
    .join(' '),
  width: `${size * 25}%`,
  padding: `0 ${padding ?? paddingDefault}`,
})

/**
 * A 4-col column layout
 */
export const Col: React.FC<ColProps> = ({
  tablet,
  desktop,
  children,
  ...phone
}) => {
  return (
    <div
      css={css({
        ...colStyle(phone, '10px'),
        ...(tablet && { [theme.mediaQuery.tablet]: colStyle(tablet) }),
        ...(desktop && { [theme.mediaQuery.desktop]: colStyle(desktop) }),
      })}
    >
      {children}
    </div>
  )
}
