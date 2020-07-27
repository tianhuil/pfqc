import styled from 'styled-components'
import React from 'react'

export const Row = styled.div`
  display: flex;
  margin: 0 -20px;
`

interface ColProps {
  before?: number
  size?: number
  after?: number
}

const RawCol = styled.div<ColProps>`
  flex: ${(p) => p.size ?? 1};
  padding: 0 20px;
`

/**
 * A column that has before empty column and after empty column
 */
export const Col: React.FC<ColProps> = ({ before, size, after, children }) => {
  return (
    <>
      {before ? <RawCol size={before} /> : null}
      <RawCol size={size}>{children}</RawCol>
      {after ? <RawCol size={after} /> : null}
    </>
  )
}
