import moment from 'moment-timezone'

export interface Time {
  time: string
  dayOffset?: string
}

export interface EventProps {
  times: [Time, Time, Time, Time]
  date: string
}

export const getEventProps = (): EventProps => {
  const m = moment('2014-06-01T12:00:00Z')

  const toTime = (m: moment.Moment, tz: string): Time => {
    return {
      time: m.tz(tz).format('h:mm A z'),
    }
  }

  return {
    times: [
      toTime(m, 'Asia/Singapore'),
      toTime(m, 'Europe/London'),
      toTime(m, 'America/New_York'),
      toTime(m, 'America/Los_Angeles'),
    ],
    date: 'xyz',
  }
}
