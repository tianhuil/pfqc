/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { H1, Section, CenterSmallButton } from './style'
import { LogoGrid } from './LogoGrid'

const logos = [
  'Princeton.png',
  'Harvard.png',
  'Yale.png',
  'Cornell.png',
  'Columbia.png',
  'UPenn.png',
  'Brown.png',
  'CMU.png',
  'MIT.png',
  'Rutgers.png',
  'NYU.png',
  'Baruch.png',
  'UChicago.png',
  'IIT.png',
  'UIUC.png',
  'Berkeley.png',
]

export const UniversityComp = () => {
  return (
    <Section id="university">
      <H1>Past Students From</H1>
      <LogoGrid logos={logos.map((logo) => 'images/university/' + logo)} />
      <CenterSmallButton>Register</CenterSmallButton>
    </Section>
  )
}
