import React from 'react'
import { H1, P, Span, Section, Col, Row, H2, SmallButton } from './style'
import styled from 'styled-components'
import { EventProps, Speaker, Time } from '../lib/events'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spacer = styled.div`
  flex: 0;
  ${(p) => p.theme.mediaQuery.desktop} {
    flex: 1;
  }
`

const Text = styled(P)`
  text-align: justify;
`

const SpeakerStyle = styled.div`
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
    text-align: center;
    margin-bottom: ${(p) => p.theme.lineHeight()};
  }

  .company {
    text-align: center;
    font-size: 18px;
  }
`

const DetailStyle = styled.div`
  width: 100%;

  .time {
    display: inline-block;
    font-weight: 500;
    width: 40%;
    text-align: right;
  }

  .dayOffset {
    display: inline-block;
    font-weight: 500;
    width: 10%;
  }

  .city {
    display: inline-block;
    width: 50%;
  }

  .time-detail {
    margin-bottom: ${(p) => p.theme.lineHeight(0.25)};
  }

  .location-detail {
    margin: ${(p) => p.theme.lineHeight()} 0;
  }

  .button {
    display: flex;
    align-items: center;
  }
`

const SpeakerComp: React.FC<Speaker> = ({ name, title, company, image }) => {
  return (
    <SpeakerStyle>
      <img src={image} />
      <P className="name">{name}</P>
      <P className="title">{title}</P>
      <P className="company">{company}</P>
    </SpeakerStyle>
  )
}

const TimeComp: React.FC<Time> = ({ time, city, dayOffset }) => {
  return (
    <div className="time-detail">
      <Span className="time">{time}</Span>
      <Span className="dayOffset">
        <sup>&nbsp;{dayOffset}</sup>
      </Span>
      <Span className="city">{city}</Span>
    </div>
  )
}

const Location: React.FC = () => {
  return (
    <div className="location-detail">
      <Span className="time">
        {/* <FontAwesomeIcon icon="map-marker" /> */}
        <i className="fa fa-map-marker"></i>
      </Span>
      <Span className="dayOffset" />
      <Span className="city">Webinar</Span>
    </div>
  )
}

const Detail: React.FC<EventProps> = ({ times }) => {
  return (
    <DetailStyle>
      {times.map((time) => (
        <TimeComp {...time} />
      ))}
      <Location />
      <div className="button">
        <SmallButton>Register</SmallButton>
      </div>
    </DetailStyle>
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
