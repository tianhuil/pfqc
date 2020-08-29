import React from 'react'
import { H1, Section, CenterSmallButton } from './style'
import { LogoGrid } from './LogoGrid'

const logos = [
    // Row 1
    'Point72.jpg',
    'Bendheim.jpg',
]

export const SponsorComp = () => {
    return (
        <Section id="sponsors">
            <H1>This Year's Sponsors</H1>
            <LogoGrid logos={logos.map((logo) => 'images/sponsors/' + logo)} />
        </Section>
    )
}