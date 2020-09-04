import React from 'react'
import { H1, Section } from './style'
import { Style as Style_LogoGrid } from './LogoGrid'
import { Row, Col } from './style'

const logos = [
  // Row 1
  'Point72.jpg',
  'Bendheim.png',
]

export const SponsorComp = () => {
  return (
    <Section id="sponsors">
      <H1>Sponsors</H1>
      <Style_LogoGrid>
        <Row>
          {logos.map((logo) => (
            <Col size={2} desktop={{ size: 2 }}>
              <div className="image">
                <img src={'images/sponsors/' + logo} />
              </div>
            </Col>
          ))}
        </Row>
      </Style_LogoGrid>
    </Section>
  )
}
