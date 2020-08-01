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
import { Event, Speaker, Time } from '../lib/events'

const Text = styled(P)`
  text-align: justify;
`

const colMargin = theme.lineHeight(1)

const SpeakerStyle = styled.div`
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

const DetailStyle = styled.div`
  width: 100%;
  margin: ${colMargin} 0 ${colMargin} 0;

  .time {
    display: inline-block;
    font-weight: 500;
    width: 40%;
    text-align: right;
  }

  .dayOffset {
    display: inline-block;
    font-weight: 500;
    width: 15%;
    ${theme.mediaQuery.tablet} {
      width: 10%;
    }
  }

  .city {
    display: inline-block;
    width: 45%;
    ${theme.mediaQuery.tablet} {
      width: 50%;
    }
  }

  .time-detail {
    margin-bottom: ${theme.lineHeight(0.25)};
  }

  .location-detail {
    margin: ${theme.lineHeight()} 0;
  }

  i.fa {
    color: ${theme.color.orange};
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

const TimeComp: React.FC<Time> = ({
  time,
  time24,
  city,
  airport,
  dayOffset,
}) => {
  const isTablet = useIsTablet()

  return (
    <div className="time-detail">
      {isTablet ? (
        <Span className="time time-tablet">{time}</Span>
      ) : (
        <Span className="time time-phone">{time24}</Span>
      )}
      <Span className="dayOffset">
        <sup>&nbsp;{dayOffset}</sup>
      </Span>
      {isTablet ? (
        <Span className="city">{city}</Span>
      ) : (
        <Span className="city">{airport}</Span>
      )}
    </div>
  )
}

const Location: React.FC = () => {
  return (
    <div className="location-detail">
      <Span className="time">
        <i className="fa fa-lg fa-map-marker"></i>
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
      <CenterSmallButton>Register</CenterSmallButton>
    </DetailStyle>
  )
}

const Style = styled.div`
  .event {
    margin-top: ${theme.lineHeight(2)};
  }
`

export const EventComp: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <Style>
      <Section>
        <H1>Princeton Fintech & Quant Conference</H1>
        <Row>
          <Col size={4} desktop={{ left: 1, right: 1, size: 2 }}>
            <Text>
              After 10 years of conferences in Princeton and Chicago, the
              Princeton Fintech & Quant Conference is launching a virtual series
              over 8 sessions starting September 2020. We will continue with our
              usual Princeton, NJ conference in the spring of 2021.
            </Text>
          </Col>
        </Row>
        <CenterSmallButton>Register</CenterSmallButton>
        {events.map((event) => (
          <div className="event">
            <H2>{event.date}</H2>
            <Row>
              {event.speakers.map((speaker) => (
                <Col size={2} desktop={{ size: 1 }}>
                  <SpeakerComp {...speaker} />
                </Col>
              ))}
              <Col size={2} desktop={{ size: 1 }}>
                <Detail {...event} />
              </Col>
            </Row>
          </div>
        ))}
      </Section>
    </Style>
  )
}
