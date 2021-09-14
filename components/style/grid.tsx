/* eslint-disable react/prop-types */
import React from 'react'

import { css } from '@emotion/core'
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
}

interface ColProps extends ColSpacing {
  tablet?: ColSpacing
  desktop?: ColSpacing
}

const colStyle = (padding: string, spacing?: ColSpacing) => {
  if (!spacing) return { padding }

  const { left, size, right } = spacing

  return {
    margin: [0, (right ?? 0) * 25, 0, (left ?? 0) * 25]
      .map((x) => `${x}%`)
      .join(' '),
    width: `${size * 25}%`,
    padding,
  }
}

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
        ...colStyle('0 10px;', phone),
        [theme.mediaQuery.tablet]: colStyle('0 20px;', tablet),
        [theme.mediaQuery.desktop]: colStyle('0 20px;', desktop),
      })}
    >
      {children}
    </div>
  )
}
