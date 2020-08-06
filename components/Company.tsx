import React from 'react'
import { H1, Section, CenterSmallButton } from './style'
import { LogoGrid } from './LogoGrid'

const logos = [
  // Row 1
  'Goldman.png',
  'MS.png',
  'JPM.png',
  'Barclays.png',
  // Row 2
  'Citi.png',
  'BAML.png',
  'UBS.png',
  'Bloomberg.png',
  // Row 3
  'Quantopian.png',
  'TwoSigma.png',
  'SIG.png',
  'Citadel.png',
]

export const CompanyComp = () => {
  return (
    <Section id="company">
      <H1>Past Speakers From</H1>
      <LogoGrid logos={logos.map((logo) => 'images/company/' + logo)} />
      <CenterSmallButton>Register</CenterSmallButton>
    </Section>
  )
}
