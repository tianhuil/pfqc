import React from 'react'
import styled from '@emotion/styled'
import { Col, Row, P, Section, theme } from './style'

const Style = styled.div`
  margin-top: -${theme.lineHeight(2)};

  .follow {
    font-weight: 500;
  }
  .social {
    display: flex;
    span {
      color: ${theme.color.orange};
      font-size: ${theme.fontSize(2)};
      line-height: ${theme.lineHeight(2)};
      padding-right: ${theme.lineHeight(1)};
    }
  }
`

export const Footer = () => {
  return (
    <Style>
      <Section>
        <Row>
          <Col size={2}>
            <P>
              &#169; <a href="/">Princeton Fintech and Quant Conference</a>
            </P>
            <P>Princeton University</P>
            <P>Princeton, NJ 08540</P>
          </Col>
          <Col size={2}>
            <P className="follow">Follow Us</P>
            <div className="social">
              <span className="fab fa-twitter-square" />
              <span className="fab fa-facebook-square" />
              <span className="fab fa-linkedin-square" />
            </div>
          </Col>
        </Row>
      </Section>
    </Style>
  )
}
