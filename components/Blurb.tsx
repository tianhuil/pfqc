import styled from '@emotion/styled'
import React from 'react'

import { Col, H1, P, Row, Section, theme, CenterSmallButton } from './style'
import { FeatureComp } from './Features'

const Text = styled(P)`
  margin-bottom: ${theme.lineHeight()};
  ${theme.mediaQuery.tablet} {
    text-align: justify;
  }
`

export const BlurbComp = () => {
  return (
    <Section>
      <H1>Princeton Fintech & Quant Conference</H1>
      <Row>
        <Col size={4} desktop={{ left: 1, right: 1, size: 2 }}>
          <Text>
            After 10 years of conferences in Princeton and Chicago, the
            Princeton Fintech & Quant Conference is continuing the online
            format with 2 dates during Fall 2021. We hope to continue with our
            usual in-person Princeton, NJ conference in the spring of 2022.
          </Text>
        </Col>
      </Row>
      <FeatureComp />
      <CenterSmallButton>Register</CenterSmallButton>
    </Section>
  )
}
