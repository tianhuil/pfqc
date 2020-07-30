import moment from 'moment-timezone'

export interface Time {
  city: string
  time: string
  dayOffset: string | null
}

export interface Speaker {
  name: string
  title: string
  company: string
  image: string
}

export interface EventProps {
  times: [Time, Time, Time, Time]
  speakers: [Speaker, Speaker, Speaker]
  date: string
}

moment.updateLocale('en-US', null)

export const getEventProps = (): EventProps => {
  const m = moment('2020-09-30T16:00:00Z')
  const baseTimezone = 'America/New_York'

  const toTime = (m: moment.Moment, tz: string): Time => {
    const sameDayAsBase =
      m.tz(baseTimezone).format('DD') !== m.tz(tz).format('DD')

    return {
      city: tz.split('/')[1].replace('_', ' '),
      time: m.tz(tz).format('h:mm A'),
      // HACK: the day can only be one forward or nothing from NYC
      dayOffset: sameDayAsBase ? '+1' : null,
    }
  }

  return {
    times: [
      toTime(m, 'Asia/Singapore'),
      toTime(m, 'Europe/London'),
      toTime(m, 'America/New_York'),
      toTime(m, 'America/Los_Angeles'),
    ],
    speakers: [
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
    ],
    date: m.tz(baseTimezone).format('MMMM D, YYYY'),
  }
}
