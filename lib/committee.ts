export interface Member {
    name: string
    title: string
    company: string
    image: string
}

export interface Committee {
    team: string
    members: [Member, Member]
}

const toCommittee = (team: string, members: [Member, Member]): Committee => {
    return {
        team,
        members,
    }
}

export const getCommitteeProps = (): Committee[] => {
    return [
        toCommittee("Marketing and Logistics", [
            {
                name: 'Karen Zhou',
                title: 'Class of 2022',
                company: 'New York University',
                image: 'images/committee_headshot/Zhou.png',
            },
            {
                name: 'Katelyn Schoenberger',
                title: 'Software Engineer',
                company: 'JPMorgan Chase & Co.',
                image: 'images/committee_headshot/Schoenberger.png',
            },
        ]),
}
