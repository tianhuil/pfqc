import React from 'react'
import { H1, P, Span, Section, Col, Row, H2, SmallButton, theme } from './style'
import styled from '@emotion/styled'
import { Event, Speaker, Time } from '../lib/events'

const Spacer = styled.div`
  flex: 0;
  ${theme.mediaQuery.desktop} {
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
    margin-bottom: ${theme.lineHeight(0.25)};
  }

  .location-detail {
    margin: ${theme.lineHeight()} 0;
  }

  .button {
    display: flex;
    align-items: center;
  }

  i.fa {
    font-size: 24px;
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
        <i className="fa fa-map-marker"></i>
      </Span>
      <Span className="dayOffset" />
      <Span className="city">Webinar</Span>
    </div>
  )
}

const Detail: React.FC<Event> = ({ times }) => {
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

const Style = styled.div`
  .event {
    margin-top: ${theme.lineHeight(4)};
  }
`

export const EventComp: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <Style>
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
        <>
          {events.map((event) => (
            <div className="event">
              <H2>{event.date}</H2>
              <Row>
                {event.speakers.map((speaker) => (
                  <EqualCol>
                    <SpeakerComp {...speaker} />
                  </EqualCol>
                ))}
                <EqualCol>
                  <Detail {...event} />
                </EqualCol>
              </Row>
            </div>
          ))}
        </>
      </Section>
    </Style>
  )
}
