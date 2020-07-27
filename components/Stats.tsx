import React from 'react'
import { Section, Span } from './style'
import styled from 'styled-components'
import { Flex } from './Flex'

const Number = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  margin: ${(p) => p.theme.lineHeight(1)} 12px;
  color: ${(p) => p.theme.color.orange};
  font-size: 24px;
  line-height: 32px;

  ${(p) => p.theme.mediaQuery.tablet} {
    font-size: ${(p) => p.theme.lineHeight(2)};
    line-height: ${(p) => p.theme.lineHeight(3)};
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
    <Section marginY={0}>
      <Flex container justifyContent="center">
        <Stat number="10th" unit="Annual" />
        <Stat number="240+" unit="Speakers" />
        <Stat number="5K+" unit="Attendees" />
      </Flex>
    </Section>
  )
}
