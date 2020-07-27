import React from 'react'
import { Section, Span } from './style'
import styled from 'styled-components'
import { Flex } from './Flex'

const Number = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  color: ${(p) => p.theme.color.orange};
  font-size: 24px;
  line-height: 24px;
  margin: 24px 0 0 0;

  ${(p) => p.theme.mediaQuery.tablet} {
    font-size: 32px;
    line-height: 32px;
    margin: 12px 8px;
  }

  ${(p) => p.theme.mediaQuery.desktop} {
    font-size: ${(p) => p.theme.lineHeight(2)};
    line-height: ${(p) => p.theme.lineHeight(3)};
    margin: ${(p) => p.theme.lineHeight(1)} 12px;
  }
`

interface StatProp {
  number: string
  unit: string
}

const StatFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.mediaQuery.tablet} {
    flex-direction: row;
  }
`

const Stat: React.FC<StatProp> = ({ number, unit }) => {
  return (
    <StatFlex>
      <Number>{number}</Number>
      <Span>{unit}</Span>
    </StatFlex>
  )
}

export const Stats = () => {
  return (
    <Section marginYMobile={0.5} marginYTable={1} marginYDesktop={1.5}>
      <Flex container justifyContent="space-around">
        <Stat number="10th" unit="Annual" />
        <Stat number="240+" unit="Speakers" />
        <Stat number="5K+" unit="Attendees" />
      </Flex>
    </Section>
  )
}
