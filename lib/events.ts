import moment, { Moment } from 'moment-timezone'

export interface Time {
  city: string
  airport: string
  time: string
  time24: string
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

const toTime = (m: Moment, tz: string, airport: string): Time => {
  const sameDayAsBase =
    m.tz(baseTimezone).format('DD') !== m.tz(tz).format('DD')

  return {
    city: tz.split('/')[1].replace('_', ' '),
    airport,
    time: m.tz(tz).format('h:mm A'),
    time24: m.tz(tz).format('HH:mm'),
    // HACK: the day can only be one forward or nothing from NYC
    dayOffset: sameDayAsBase ? '+1' : null,
  }
}

const toTimes = (m: Moment): Time4 => {
  return [
    toTime(m, 'America/Los_Angeles', 'LAX'),
    toTime(m, 'America/New_York', 'NYC'),
    toTime(m, 'Europe/London', 'LHR'),
    toTime(m, 'Asia/Singapore', 'SIN'),
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
  const m = moment('2020-09-26T16:00:00Z')

  return [
    toEvent(moment('2020-09-26T15:00:00Z'), [
      {
        name: 'Christina Qi',
        title: 'Co-Founder',
        company: 'Domeyard',
        image: 'images/headshot/Qi.png',
      },
      {
        name: 'John Birge',
        title: 'Principal and Co-Founder',
        company: 'Quantstar',
        image: 'images/headshot/Birge.png',
      },
      {
        name: 'Abraham Thomas',
        title: 'Finance Change and Regulatory Reporting',
        company: 'Deutsche Bank',
        image: 'images/headshot/Thomas.png',
      },
    ]),

    toEvent(moment('2020-10-09T17:30:00Z'), [
      {
        name: 'Bruno Dupire',
        title: 'Head of Quantitative Research',
        company: 'Bloomberg LP',
        image: 'images/headshot/Dupire.png',
      },
      {
        name: 'Andrew Peek',
        title: 'Co-Founder and CEO',
        company: 'Delphia',
        image: 'images/headshot/Peek.png',
      },
      {
        name: 'Justin Zhen',
        title: 'Co-Founder ',
        company: 'Thinknum Alternative Data',
        image: 'images/headshot/Zhen.png',
      },
    ]),

    toEvent(moment('2020-10-24T15:00:00Z'), [
      {
        name: 'Boris Lerner',
        title: 'Global Head of Quantitative Equity Research',
        company: 'Morgan Stanley',
        image: 'images/headshot/Lerner.png',
      },
      {
        name: 'Chris Bemis',
        title: 'Head of Quantitative Analysis and Research',
        company: 'Whitebox Advisors',
        image: 'images/headshot/Bemis.png',
      },
      {
        name: 'Michael Miller',
        title: 'CEO',
        company: 'Northstar Risk Corporation',
        image: 'images/headshot/Miller.png',
      },
    ]),
    toEvent(moment('2020-11-21T16:00:00Z'), [
      {

        name: 'Mike Soss',
        title: 'Head of Fusion (Internal Alpha Capture)',
        company: 'Point72',
        image: 'images/headshot/Soss.png',
      },
      {
        name: 'Ali Hirsa',
        title: 'Managing Partner',
        company: 'Sauma Capital',
        image: 'images/headshot/Hirsa.png',
      },
      {
        name: 'Gurraj Singh Sangha',
        title: 'Head of Data Science, Risk, and MI',
        company: 'State Street',
        image: 'images/headshot/Sangha.png',
      },
    ]),
    toEvent(moment('2020-12-05T16:00:00Z'), [
      {
        name: 'Nick Alonso',
        title: 'TBA',
        company: 'TBA',
        image: 'images/headshot/Alonso.png',
      },
      {
        name: 'Yury Blyakhman',
        title:
          'Managing Director, Head of Linear Rates and FX Quant Research, Emerging and Developed Markets',
        company: 'JP Morgan',
        image: 'images/headshot/Blyakhman.png',
      },
      {
        name: 'Gregory Pelts',
        title: 'Director',
        company: 'Scotiabank',
        image: 'images/headshot/Pelts.png',
      },
    ]),
    toEvent(moment('2020-01-31T16:00:00Z'), [
      {
        name: 'Dr. Harvey Stein	',
        title: 'Head, Quantitative Risk Analytics',
        company: 'Bloomberg LP',
        image: 'images/headshot/Stein.png',
      },
      {
        name: 'Sebastian Jaimungal',
        title: 'Professor',
        company: 'University of Toronto',
        image: 'images/headshot/Jaimungal.png',
      },
      {
        name: 'Terry Benzschawel',
        title: 'Founder and Principal',
        company: 'Benzschawel Scientific LLC',
        image: 'images/headshot/Benzschawel.png',
      },
    ]),
    toEvent(moment('2020-02-27T16:00:00Z'), [
      {
        name: 'TBA',
        title: '',
        company: '',
        image: 'images/headshot/TBA.png',
      },
      {
        name: 'George Mylnikov',
        title: 'Portfolio Manager, Head of Quantitative Research',
        company: 'Windhaven Investment Management',
        image: 'images/headshot/Mylnikov.png',
      },
      {
        name: 'Alexander Fleiss',
        title: 'CEO',
        company: 'RebellionResearch',
        image: 'images/headshot/Fleiss.png',
      },
    ]),
    toEvent(moment('2020-03-27T15:00:00Z'), [
      {
        name: 'TBA',
        title: '',
        company: '',
        image: 'images/headshot/TBA.png',
      },
      {
        name: 'Jess Stauth',
        title: 'Managing Director',
        company: 'Fidelity Labs',
        image: 'images/headshot/Stauth.png',
      },
      {
        name: 'Alex Izydorcik',
        title: 'Head of Data Science',
        company: 'Coatue',
        image: 'images/headshot/Izydorcik.png',
      },
    ]),
    toEvent(moment('2020-04-24T15:00:00Z'), [
      {
        name: 'TBA',
        title: '',
        company: '',
        image: 'images/headshot/TBA.png',
      },
      {
        name: 'Dr. Miquel Noguer i Alonso',
        title: 'Founder',
        company: 'Artificial Intelligence Finance Institute',
        image: 'images/headshot/NogueriAlonso.png',
      },
      {
        name: 'Kyle Schlotman',
        title: 'Partner and CIO',
        company: 'Connetic Ventures',
        image: 'images/headshot/Schlotman.png',
      },
    ]),
  ]
}
