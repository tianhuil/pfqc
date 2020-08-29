import React from 'react'
import { H1, Section, CenterSmallButton } from './style'
import { LogoGrid } from './LogoGrid'
import { Row, theme, Col } from './style'
import styled from '@emotion/styled'

const Style = styled.div`
  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: ${theme.lineHeight(2)};
  }
  img {
    max-width: 70%;
    ${theme.mediaQuery.tablet} {
      max-width: 60%;
    }
  }
`

const logos = [
    // Row 1
    'Point72.jpg',
    'Bendheim.png',
]

export const SponsorComp = () => {
    return (
        <Section id="sponsors">
            <H1>This Year's Sponsors</H1>
            <Style>
                <Row>
                    {logos.map((logo) => (
                        <Col size={2} desktop={{ size: 2 }}>
                            <div className="image">
                                <img src={'images/sponsors/' + logo} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Style>
        </Section>
    )
}