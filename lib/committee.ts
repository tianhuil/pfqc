export interface Member {
  name: string
  title: string
  company: string
  image: string
}

export interface Committee {
  team: string
  members: Member[]
}

const toCommittee = (team: string, members: Member[]): Committee => {
  return {
    team,
    members,
  }
}

export const getCommitteeProps = (): Committee[] => {
  return [
    toCommittee('Marketing and Logistics', [
      {
        name: 'Claudia Popescu',
        title: 'Class of 2021',
        company: 'Princeton University',
        image: 'images/committee_headshot/Popescu.jpeg',
      },
      {
        name: 'Karen Zhou',
        title: 'Class of 2022',
        company: 'New York University',
        image: 'images/committee_headshot/Zhou.jpeg',
      },
      {
        name: 'Katelyn Schoenberger',
        title: 'Software Engineer',
        company: 'JPMorgan Chase & Co.',
        image: 'images/committee_headshot/Schoenberger.jpeg',
      },
      {
        name: 'Kristian Bjarnason',
        title: 'Class of 2021',
        company: 'Princeton University',
        image: 'images/committee_headshot/Bjarnason.jpeg',
      },
      {
        name: 'Lucy Lu',
        title: 'Class of 2021',
        company: 'Cornell University',
        image: 'images/committee_headshot/Lu.jpeg',
      },
      {
        name: 'Marius Constantin',
        title: 'Risk Engineering Strats Analyst',
        company: 'Goldman Sachs',
        image: 'images/committee_headshot/Constantin.jpeg',
      },
      {
        name: 'Soha Aslam',
        title: 'Class of 2020',
        company: 'Princeton University',
        image: 'images/committee_headshot/Aslam.jpeg',
      },
    ]),
    toCommittee('Speakers', [
      {
        name: 'Binayak Kandel',
        title: 'Class of 2019',
        company: 'Boston University',
        image: 'images/committee_headshot/Kandel.jpeg',
      },
      {
        name: 'Christy Matthews',
        title: 'Class of 2020',
        company: 'Princeton University',
        image: 'images/committee_headshot/Matthews.jpeg',
      },
      {
        name: 'Greeshma Balabhadra',
        title: 'Class of 2023',
        company: 'Stony Brook University',
        image: 'images/committee_headshot/Balabhadra.jpeg',
      },
      {
        name: 'Michael Li',
        title: 'Founder and President',
        company: 'The Data Incubator',
        image: 'images/committee_headshot/Li.jpeg',
      },
      {
        name: 'Nicholas Chow',
        title: 'Class of 2018',
        company: 'Princeton University',
        image: 'images/committee_headshot/Chow.jpeg',
      },
      {
        name: 'Sarah Nagy',
        title: 'Sector Data Analyst',
        company: 'Ashler Capital',
        image: 'images/committee_headshot/Nagy.jpeg',
      },
      {
        name: 'Maria Velicu',
        title: 'Class of 2020',
        company: 'Yale University',
        image: 'images/committee_headshot/Velicu.jpeg',
      },
      {
        name: 'Paul Krueger',
        title: 'Class of 2021',
        company: 'Princeton University',
        image: 'images/committee_headshot/Krueger.jpeg',
      },
      {
        name: 'Rui Ding',
        title: 'Class of 2023',
        company: 'Stony Brook University',
        image: 'images/committee_headshot/Ding.jpeg',
      },
      {
        name: 'Ruiqing Cao',
        title: 'Class of 2019',
        company: 'Harvard University',
        image: 'images/committee_headshot/Cao.jpeg',
      },
    ]),
  ]
}
