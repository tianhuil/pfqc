import React from 'react'
import { Section, H1, Row, Col, P, theme } from './style'
import styled from '@emotion/styled'

const Text = styled(P)`
  text-align: justify;
  margin-bottom: ${theme.lineHeight()};
`

const Img = styled.img`
  display: none;
  ${theme.mediaQuery.desktop} {
    display: block;
    max-width: 100%;
  }
`

export const AboutUs = () => {
  return (
    <Section>
      <H1>About Us</H1>
      <Row>
        <Col size={4} desktop={{ size: 2 }}>
          <Text>
            The Princeton Fintech and Quant Conference seeks to bring together a
            unique cross-section of the leading experts from academia, industry,
            and government in a relaxed intellectual environment to catalyze
            discussions and strengthen ties across traditional boundaries.
          </Text>
          <Text>
            We cover subjects ranging from fintech and bitcoin to statistical
            arbitrage and model construction. The conference provides a unique
            opportunity for leaders and students in fintech and quant
            trading-related fields to directly interact.
          </Text>
          <Text>
            The student and young alumni organizing committee is exclusively
            volunteer and 100% of proceeds go to support education nonprofits.
          </Text>
        </Col>
        <Col size={0} desktop={{ size: 2 }}>
          <Img src="images/about.jpg" />
        </Col>
      </Row>
    </Section>
  )
}
