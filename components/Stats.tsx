/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Span, theme } from './style'
import styled from '@emotion/styled'

const Number = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  color: ${theme.color.orange};
  font-size: 24px;
  line-height: 24px;

  ${theme.mediaQuery.tablet} {
    font-size: 32px;
    line-height: 32px;
    margin: 0 8px;
  }

  ${theme.mediaQuery.desktop} {
    font-size: ${theme.lineHeight(2)};
    line-height: ${theme.lineHeight(3)};
    margin: 0 12px;
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
  ${theme.mediaQuery.tablet} {
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

const StatsSecton = styled.div`
  margin: 0 auto;
  padding: ${theme.lineHeight(0.5)} 10px;

  ${theme.mediaQuery.tablet} {
    padding: ${theme.lineHeight(1)} 40px;
  }
  ${theme.mediaQuery.desktop} {
    padding: ${theme.lineHeight(2.5)} auto;
    width: 920px;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`

const Elevated = styled.div`
  width: 100%;
  box-shadow: 0 2px rgba(0, 0, 0, 0.25);
`

export const Stats = () => {
  return (
    <Elevated>
      <StatsSecton>
        <Stat number="10th" unit="Annual" />
        <Stat number="240+" unit="Speakers" />
        <Stat number="5K+" unit="Attendees" />
      </StatsSecton>
    </Elevated>
  )
}
