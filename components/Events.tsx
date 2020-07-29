import React from 'react'
import { H1, P, Section, Col, Row, H2 } from './style'
import styled from 'styled-components'
import { EventProps, Speaker } from '../lib/events'

const Spacer = styled.div`
  flex: 0;
  ${(p) => p.theme.mediaQuery.desktop} {
    flex: 1;
  }
`

const Text = styled(P)`
  text-align: justify;
`

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
    margin-bottom: ${(p) => p.theme.lineHeight(0.5)};
  }

  .name {
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }

  .title {
    font-weight: 300;
    text-align: center;
    margin-bottom: ${(p) => p.theme.lineHeight()};
  }

  .company {
    font-weight: 300;
    text-align: center;
    font-size: 18px;
  }
`

const SpeakerComp: React.FC<Speaker> = ({ name, title, company, image }) => {
  return (
    <Style>
      <img src={image} />
      <P className="name">{name}</P>
      <P className="title">{title}</P>
      <P className="company">{company}</P>
    </Style>
  )
}

const Detail: React.FC<EventProps> = ({ times }) => {
  return (
    <div>
      {times.map((t) => (
        <P>{t.time}</P>
      ))}
    </div>
  )
}

const EqualCol = styled.div`
  flex: 1 1 0px;
`

export const Events: React.FC<EventProps> = (props) => {
  return (
    <>
      <Section>
        <H1>Conference Speakers</H1>
        <Row>
          <Spacer />
          <Col size={2}>
            <Text>
              After 10 years of conferences in Princeton and Chicago, the
              Princeton Fintech & Quant Conference is launching a virtual series
              over 8 sessions starting September 2020. We will continue with our
              usual Princeton, NJ conference in the spring of 2021.
            </Text>
          </Col>
          <Spacer />
        </Row>

        <H2>{props.date}</H2>
        <Row>
          {props.speakers.map((speaker) => (
            <EqualCol>
              <SpeakerComp {...speaker} />
            </EqualCol>
          ))}
          <EqualCol>
            <Detail {...props} />
          </EqualCol>
        </Row>
      </Section>
    </>
  )
}
