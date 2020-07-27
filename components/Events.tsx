import React from 'react'
import { H1, P, Section, Col, Row } from './style'
import styled from 'styled-components'

const Spacer = styled(Col)`
  flex: 0;
  ${(p) => p.theme.mediaQuery.tablet} {
    flex: 1;
  }
`

const Text = styled(P)`
  text-align: justify;
`

export const Events = () => {
  return (
    <Section>
      <H1>Conference Speakers</H1>
      <Row>
        <Col size={2}>
          <Text>
            After 10 years of conferences in Princeton and Chicago, the
            Princeton Fintech & Quant Conference is launching a virtual series
            over 8 sessions starting September 2020. We will continue our
            Princeton, NJ conference in spring, 2021.
          </Text>
        </Col>
      </Row>
    </Section>
  )
}
