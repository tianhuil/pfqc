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
  return <Capsule fontSize={16}>{children}</Capsule>
}

export const P = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: ${(p) => p.theme.fontSize()};
  line-height: ${(p) => p.theme.lineHeight()};
  color: #091133;
`

export const H1 = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: ${(p) => p.theme.fontSize(2)};
  line-height: ${(p) => p.theme.lineHeight(2)};
  color: #091133;
`

export const Section = styled.div`
  width: 920px;
  margin: ${(p) => p.theme.lineHeight(3)} auto;
`
