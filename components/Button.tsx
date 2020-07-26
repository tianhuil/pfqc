import * as React from 'react'

import styled from 'styled-components'

interface CapsuleProps {
  fontSize: number
}

const Capsule = styled.div<CapsuleProps>`
  border-radius: 100px;
  background: #e77500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.fontSize}px;
  color: #fff;
  padding: ${(props) => props.fontSize}px ${(props) => props.fontSize * 3}px;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
`

export const LargeButton: React.FC = ({ children }) => {
  return <Capsule fontSize={18}>{children}</Capsule>
}
