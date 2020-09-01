import React from 'react'
import { Row, theme, Col } from './style'
import styled from '@emotion/styled'

export const Style = styled.div`
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

export const LogoGrid: React.FC<{ logos: string[] }> = ({ logos }) => {
  return (
    <Style>
      <Row>
        {logos.map((logo, k) => (
          <Col size={2} desktop={{ size: 1 }} key={k}>
            <div className="image">
              <img src={logo} />
            </div>
          </Col>
        ))}
      </Row>
    </Style>
  )
}
