import * as React from 'react'

import styled from 'styled-components'

interface CapsuleProps {
  fontSize: number
}

const Capsule = styled.div<CapsuleProps>`
  border-radius: 100px;
  background: #e77500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(p) => p.theme.color.white};
  font-weight: 800px;
  text-transform: uppercase;
  text-align: center;
  margin: auto;

  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.fontSize}px;
  padding: ${(props) => props.fontSize}px ${(props) => props.fontSize * 3}px;
`

export const LargeButton: React.FC = ({ children }) => {
  return <Capsule fontSize={16}>{children}</Capsule>
}

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  color: ${(p) => p.theme.color.black};
  font-size: ${(p) => p.theme.fontSize()};
  line-height: ${(p) => p.theme.lineHeight()};
`

export const P = styled(Span)`
  display: block;
  color: rgb(0, 0, 0, 0.8);
`

export const H1 = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 200;
  text-align: center;
  color: rgb(0, 0, 0, 0.5);

  font-size: ${(p) => p.theme.fontSize(1.5)};
  line-height: ${(p) => p.theme.lineHeight(2)};
  margin: ${(p) => p.theme.lineHeight(1)} auto;

  ${(p) => p.theme.mediaQuery.tablet} {
    font-size: ${(p) => p.theme.fontSize(2)};
    line-height: ${(p) => p.theme.lineHeight(2)};
    margin: ${(p) => p.theme.lineHeight(2)} auto;
  }

  ${(p) => p.theme.mediaQuery.desktop} {
    font-size: ${(p) => p.theme.fontSize(3)};
    line-height: ${(p) => p.theme.lineHeight(3)};
    margin: ${(p) => p.theme.lineHeight(2)} auto;
  }
`

export const H2 = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: rgb(0, 0, 0, 0.5);

  font-size: 18px;
  line-height: 24px;
  margin: 24px auto;

  ${(p) => p.theme.mediaQuery.tablet} {
    font-size: ${(p) => p.theme.fontSize(1.5)};
    line-height: ${(p) => p.theme.lineHeight(1.5)};
    margin: ${(p) => p.theme.lineHeight(1.5)} auto;
  }

  ${(p) => p.theme.mediaQuery.desktop} {
    font-size: ${(p) => p.theme.fontSize(2)};
    line-height: ${(p) => p.theme.lineHeight(2)};
    margin: ${(p) => p.theme.lineHeight(1)} auto;
  }
`

export interface SectionProps {
  marginYMobile?: number
  marginYTable?: number
  marginYDesktop?: number
}

export const Section = styled.div<SectionProps>`
  margin: ${(p) => p.theme.lineHeight(p.marginYMobile ?? 1)} 10px;
  max-width: 440px;

  ${(p) => p.theme.mediaQuery.tablet} {
    margin: ${(p) => p.theme.lineHeight(p.marginYTable ?? 2)} auto;
    max-width: 440px;
  }
  ${(p) => p.theme.mediaQuery.desktop} {
    margin: ${(p) => p.theme.lineHeight(p.marginYDesktop ?? 3)} auto;
    max-width: 920px;
  }
`
