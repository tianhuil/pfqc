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
        toCommittee("Marketing and Logistics", [
            {
                name: 'Marius Constantin',
                title: 'Risk Engineering Strats Analyst',
                company: 'Goldman Sachs',
                image: 'images/committee_headshot/Constantin.jpeg',
            },
            {
                name: 'Katelyn Schoenberger',
                title: 'Software Engineer',
                company: 'JPMorgan Chase & Co.',
                image: 'images/committee_headshot/Schoenberger.jpeg',
            },
            {
                name: 'Karen Zhou',
                title: 'Class of 2022',
                company: 'New York University',
                image: 'images/committee_headshot/Zhou.jpeg',
            },
            {
                name: 'Lucy Lu',
                title: 'Class of 2021',
                company: 'Cornell University',
                image: 'images/committee_headshot/Lu.jpeg',
            },
        ]),
        toCommittee("Speakers", [
            {
                name: 'Nicholas Chow',
                title: 'Class of 2018',
                company: 'Princeton University',
                image: 'images/committee_headshot/Chow.jpeg',
            },
            {
                name: 'Soha Aslam',
                title: 'Class of 2020',
                company: 'Princeton University',
                image: 'images/committee_headshot/Aslam.jpeg',
            },
            {
                name: 'Paul Krueger',
                title: 'Class of 2021',
                company: 'Princeton University',
                image: 'images/committee_headshot/Krueger.jpeg',
            },
            {
                name: 'Kristian Bjarnason',
                title: 'Class of 2021',
                company: 'Princeton University',
                image: 'images/committee_headshot/Bjarnason.jpeg',
            },
            {
                name: 'Greeshma Balabhadra',
                title: 'Class of 2023',
                company: 'Stony Brook University',
                image: 'images/committee_headshot/Balabhadra.jpeg',
            },
        ]),
    ]
}
