import React from 'react'
import { H1, Section, Row, theme, Col } from './style'
import styled from '@emotion/styled'

const logos = [
  // Row 1
  'Goldman.png',
  'MS.png',
  'JPM.png',
  'Barclays.png',
  // Row 2
  'Citi.png',
  'BAML.png',
  'UBS.png',
  'Bloomberg.png',
  // Row 3
  'Quantopian.png',
  'TwoSigma.png',
  'SIG.png',
  'Citadel.png',
]

const Style = styled.div`
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 75%;
    margin: ${theme.lineHeight()} 0;
  }
  img {
    max-width: 100%;
  }
`

export const CompaniesComp = () => {
  return (
    <Style>
      <Section>
        <H1>Past Speakers From</H1>
        <Row>
          {logos.map((logo) => (
            <Col size={2} desktop={{ size: 1 }}>
              <div className="image">
                <img src={'images/logo/' + logo} />
              </div>
            </Col>
          ))}
        </Row>
      </Section>
    </Style>
  )
}
