import React from 'react'
import { H1, P, Section, Col, Row } from './style'

export const Events = () => {
  return (
    <Section>
      <H1>Conference Speakers</H1>
      <Row>
        <Col before={1} size={2} after={1}>
          <P>
            After 10 years of conferences in Princeton and Chicago, the
            Princeton Fintech & Quant Conference is launching a virtual series
            over 8 sessions starting September 2020. We will continue our
            Princeton, NJ conference in spring, 2021.
          </P>
        </Col>
      </Row>
    </Section>
  )
}
