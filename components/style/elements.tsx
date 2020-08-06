import * as React from 'react'

import styled from '@emotion/styled'
import { theme } from './theme'
import { eventbriteUrl } from '../../lib/util'

interface CapsuleProps {
  fontSize: number
}

const Capsule = styled.div<CapsuleProps>`
  display: inline-block;
  border-radius: 100px;
  background: ${theme.color.orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${theme.color.white};
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin: auto;

  :hover {
    background: ${theme.color.orangeFaded};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

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
    <a target="_blank" href={eventbriteUrl}>
      <Capsule fontSize={16}>{children}</Capsule>
    </a>
  )
}

export const SmallButton: React.FC = ({ children }) => {
  return (
    <a target="_blank" href={eventbriteUrl}>
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

const textStyle = {
  fontFamily: ['Roboto', 'sans-serif'],
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: theme.fontSize(),
  lineHeight: theme.lineHeight(),
  color: 'rgb(0, 0, 0, 0.8)',
}

export const Span = styled.span(textStyle)

export const P = styled.span({ display: 'block', ...textStyle })

export const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  color: rgb(0, 0, 0, 0.6);

  font-size: ${theme.fontSize(1.5)};
  line-height: ${theme.lineHeight(1.5)};
  margin: ${theme.lineHeight(1.5)} auto;

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

  font-size: ${theme.fontSize(1.2)};
  line-height: ${theme.lineHeight(1.2)};
  margin: ${theme.lineHeight(1.2)} auto;

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
  marginYTablet?: number
  marginYDesktop?: number
}

export const Section = styled.div<SectionProps>`
  margin: ${(p) => theme.lineHeight(p.marginYMobile ?? 1)} 20px;

  ${theme.mediaQuery.medium} {
    margin: ${(p) => theme.lineHeight(p.marginYTablet ?? 2)} auto;
    max-width: 440px;
  }

  ${theme.mediaQuery.tablet} {
    margin: ${(p) => theme.lineHeight(p.marginYTablet ?? 2)} auto;
    max-width: 440px;
  }
  ${theme.mediaQuery.desktop} {
    margin: ${(p) => theme.lineHeight(p.marginYDesktop ?? 3)} auto;
    max-width: 920px;
  }
`
