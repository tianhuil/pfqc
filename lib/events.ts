import moment, { Moment } from 'moment-timezone'

export interface Time {
  city: string
  time: string
  dayOffset: string | null
}

type Time4 = [Time, Time, Time, Time]

export interface Speaker {
  name: string
  title: string
  company: string
  image: string
}

export interface Event {
  times: Time4
  speakers: [Speaker, Speaker, Speaker]
  date: string
}

moment.updateLocale('en-US', null)
const baseTimezone = 'America/New_York'

const toTime = (m: Moment, tz: string): Time => {
  const sameDayAsBase =
    m.tz(baseTimezone).format('DD') !== m.tz(tz).format('DD')

  return {
    city: tz.split('/')[1].replace('_', ' '),
    time: m.tz(tz).format('h:mm A'),
    // HACK: the day can only be one forward or nothing from NYC
    dayOffset: sameDayAsBase ? '+1' : null,
  }
}

const toTimes = (m: Moment): Time4 => {
  return [
    toTime(m, 'Asia/Singapore'),
    toTime(m, 'Europe/London'),
    toTime(m, 'America/New_York'),
    toTime(m, 'America/Los_Angeles'),
  ]
}

const dateString = (m: Moment) => {
  return m.tz(baseTimezone).format('MMMM D, YYYY')
}

const toEvent = (m: Moment, speakers: [Speaker, Speaker, Speaker]): Event => {
  return {
    times: toTimes(m),
    speakers,
    date: dateString(m),
  }
}

export const getEventProps = (): Event[] => {
  const m = moment('2020-09-30T16:00:00Z')

  return [
    toEvent(moment('2020-09-30T16:00:00Z'), [
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
    ]),
    toEvent(moment('2020-10-30T16:00:00Z'), [
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
    ]),
    toEvent(moment('2020-11-30T16:00:00Z'), [
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
      {
        name: 'Bruno Dupire',
        title: 'Managing Director',
        company: 'Bloomberg',
        image: 'images/Dupire.png',
      },
    ]),
  ]
}
