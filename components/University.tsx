import React from 'react'
import { H1, Section } from './style'
import { LogoGrid } from './LogoGrid'

const logos = [
  'Baruch.png',
  'Berkeley.png',
  'Brown.png',
  'CMU.png',
  'Columbia.png',
  'Cornell.png',
  'Harvard.png',
  'IIT.png',
  'MIT.png',
  'NYU.png',
  'Princeton.png',
  'Rutgers.png',
  'UChicago.png',
  'UIUC.png',
  'UPenn.png',
  'Yale.png',
]

export const UniversityComp = () => {
  return (
    <Section>
      <H1>Past Students From</H1>
      <LogoGrid logos={logos.map((logo) => 'images/university/' + logo)} />
    </Section>
  )
}
