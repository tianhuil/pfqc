import React from 'react'
import { H1, P, Section, Col, Row, H2 } from './style'
import styled from 'styled-components'

const Spacer = styled.div`
  flex: 0;
  ${(p) => p.theme.mediaQuery.desktop} {
    flex: 1;
  }
`

const Text = styled(P)`
  text-align: justify;
`

export const Events = () => {
  return (
    <>
      <Section>
        <H1>Conference Speakers</H1>
        <Row>
          <Spacer />
          <Col size={2}>
            <Text>
              After 10 years of conferences in Princeton and Chicago, the
              Princeton Fintech & Quant Conference is launching a virtual series
              over 8 sessions starting September 2020. We will continue with our
              usual Princeton, NJ conference in the spring of 2021.
            </Text>
          </Col>
          <Spacer />
        </Row>

        <H2>September 30th, 2020</H2>
        <Row>
          <Col size={1}></Col>
        </Row>
      </Section>
    </>
  )
}
