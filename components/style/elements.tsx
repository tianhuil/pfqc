import * as React from 'react'

import styled from '@emotion/styled'
import { theme } from './theme'

interface CapsuleProps {
  fontSize: number
}

const Capsule = styled.div<CapsuleProps>`
  display: inline-block;
  border-radius: 100px;
  background: #e77500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${theme.color.white};
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin: auto;

  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.fontSize}px;
  padding: ${(props) => props.fontSize}px ${(props) => props.fontSize * 2}px;
  ${theme.mediaQuery.tablet} {
    padding: ${(props) => props.fontSize}px ${(props) => props.fontSize * 3}px;
  }
`

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LargeButton: React.FC = ({ children }) => {
  return (
    <a
      target="_blank"
      href={
        'https://www.eventbrite.com/e/pfqc-webinar-series-tickets-113711903364'
      }
    >
      <Capsule fontSize={16}>{children}</Capsule>
    </a>
  )
}

export const SmallButton: React.FC = ({ children }) => {
  return (
    <a
      target="_blank"
      href={
        'https://www.eventbrite.com/e/pfqc-webinar-series-tickets-113711903364'
      }
    >
      <Capsule fontSize={14}>{children}</Capsule>
    </a>
  )
}

export const CenterSmallButton: React.FC = ({ children }) => {
  const Style = styled.div`
    margin: ${theme.lineHeight(2)} 0;
  `

  return (
    <Style>
      <Center>
        <SmallButton>{children}</SmallButton>
      </Center>
    </Style>
  )
}

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  color: ${theme.color.black};
  font-size: ${theme.fontSize()};
  line-height: ${theme.lineHeight()};
  color: rgb(0, 0, 0, 0.8);
`

export const P = styled(Span)`
  display: block;
`

export const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  color: rgb(0, 0, 0, 0.6);

  font-size: ${theme.fontSize(1.5)};
  line-height: ${theme.lineHeight(2)};
  margin: ${theme.lineHeight(1)} auto;

  ${theme.mediaQuery.tablet} {
    font-size: ${theme.fontSize(2)};
    line-height: ${theme.lineHeight(2)};
    margin: ${theme.lineHeight(2)} auto;
  }

  ${theme.mediaQuery.desktop} {
    font-size: ${theme.fontSize(3)};
    line-height: ${theme.lineHeight(3)};
    margin: ${theme.lineHeight(2)} auto;
  }
`

export const H2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: rgb(0, 0, 0, 0.6);

  font-size: 18px;
  line-height: 24px;
  margin: 24px auto;

  ${theme.mediaQuery.tablet} {
    font-size: ${theme.fontSize(1.5)};
    line-height: ${theme.lineHeight(1.5)};
    margin: ${theme.lineHeight(1.5)} auto;
  }

  ${theme.mediaQuery.desktop} {
    font-size: ${theme.fontSize(2)};
    line-height: ${theme.lineHeight(2)};
    margin: ${theme.lineHeight(1)} auto;
  }
`

export interface SectionProps {
  marginYMobile?: number
  marginYTable?: number
  marginYDesktop?: number
}

export const Section = styled.div<SectionProps>`
  margin: ${(p) => theme.lineHeight(p.marginYMobile ?? 1)} 20px;
  max-width: 440px;

  ${theme.mediaQuery.tablet} {
    margin: ${(p) => theme.lineHeight(p.marginYTable ?? 2)} auto;
    max-width: 440px;
  }
  ${theme.mediaQuery.desktop} {
    margin: ${(p) => theme.lineHeight(p.marginYDesktop ?? 3)} auto;
    max-width: 920px;
  }
`
