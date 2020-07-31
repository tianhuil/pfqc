import React from 'react'
import { Row, theme, Col } from './style'
import styled from '@emotion/styled'

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

export const LogoGrid: React.FC<{ logos: string[] }> = ({ logos }) => {
  return (
    <Style>
      <Row>
        {logos.map((logo) => (
          <Col size={2} desktop={{ size: 1 }}>
            <div className="image">
              <img src={logo} />
            </div>
          </Col>
        ))}
      </Row>
    </Style>
  )
}
