import React from 'react'
import {
  H1,
  P,
  Span,
  Section,
  Col,
  Row,
  H2,
  CenterSmallButton,
  theme,
  useIsTablet,
} from './style'
import styled from '@emotion/styled'
import { Committee, Member } from '../lib/committee'

const colMargin = theme.lineHeight(1)

const CommitteeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${colMargin} 0 ${colMargin} 0;
  img {
    max-width: 100%;
    ${theme.mediaQuery.tablet} {
      max-width: 75%;
    }
    border-radius: 50%;
    margin-bottom: ${theme.lineHeight(0.5)};
  }
  .name {
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
  .title {
    text-align: center;
    margin-bottom: ${theme.lineHeight()};
  }
  .company {
    text-align: center;
    font-size: 18px;
  }
`

const MemberComp: React.FC<Member> = ({ name, title, company, image }) => {
  return (
    <CommitteeStyle>
      <img src={image} />
      <P className="name">{name}</P>
      <P className="title">{title}</P>
      <P className="company">{company}</P>
    </CommitteeStyle>
  )
}

const Style = styled.div`
  .event {
    margin-top: ${theme.lineHeight(2)};
  }
`

export const CommitteeComp: React.FC<{ committees: Committee[] }> = ({ committees }) => {
  return (
    <Style>
      <Section id="committee">
        <H2> Committee Members</H2>
        {committees.map((committee) => (
          <div className="committee">
            <Row>
              {committee.members.map((member) => (
                <Col size={2} desktop={{ size: 1 }}>
                  <MemberComp {...member} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Section>
    </Style>
  )
}