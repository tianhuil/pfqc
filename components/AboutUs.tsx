import React from 'react'
import { Section, H1, Row, Col, P, theme, CenterSmallButton } from './style'
import styled from '@emotion/styled'

const Style = styled.div`
  .p {
    margin-bottom: ${theme.lineHeight()};
  }
  .p:last-child {
    margin-bottom: 0;
  }

  .img {
    display: none;
    ${theme.mediaQuery.desktop} {
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('/images/About.jpg');
      background-size: cover;
      background-position: top center;
    }
  }
`

export const AboutUs = () => {
  return (
    <Style>
      <Section id="aboutus">
        <H1>Our Mission</H1>
        <Row>
          <Col size={4} desktop={{ size: 2 }}>
            <P className="p">
              The Princeton Fintech and Quant Conference seeks to bring together
              a unique cross-section of the leading experts from academia,
              industry, and government in a relaxed intellectual environment to
              catalyze discussions and strengthen ties across traditional
              boundaries.
            </P>
            <P className="p">
              We cover subjects ranging from fintech and bitcoin to statistical
              arbitrage and model construction. The conference provides a unique
              opportunity for leaders and students in fintech and quant
              trading-related fields to directly interact.
            </P>
            <P className="p">
              The student and young alumni organizing committee is exclusively
              volunteer and 100% of proceeds go to support education nonprofits.
            </P>
          </Col>
          <Col size={0} desktop={{ size: 2 }}>
            <div className="img" />
          </Col>
        </Row>
        <CenterSmallButton>Register</CenterSmallButton>
      </Section>
    </Style>
  )
}
