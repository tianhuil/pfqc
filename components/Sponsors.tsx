import React from 'react'
import { H1, Section } from './style'
import { Style as StyleLogoGrid } from './LogoGrid'
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
      <StyleLogoGrid>
        <Row>
          {logos.map((logo, k) => (
            <Col size={2} tablet={{ size: 2 }} key={k}>
              <div className="image">
                <img src={'images/sponsors/' + logo} />
              </div>
            </Col>
          ))}
        </Row>
      </StyleLogoGrid>
    </Section>
  )
}
