import { GetStaticProps } from 'next'
import React from 'react'

import { AboutUs } from '../components/AboutUs'
import { Banner } from '../components/Banner'
import { BlurbComp } from '../components/Blurb'
import { CommitteeComp } from '../components/Committee'
import { CompanyComp } from '../components/Company'
import { EventComp } from '../components/Events'
import { Footer } from '../components/Footer'
import { BodyLayout, NavbarLayout, SplashLayout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { Splash } from '../components/Splash'
import { SponsorComp } from '../components/Sponsors'
import { Stats } from '../components/Stats'
import { UniversityComp } from '../components/University'
import { Committee, getCommitteeProps } from '../lib/committee'
import { Event, getEventProps } from '../lib/events'

type PromiseLike<T> = {
  then(onfulfilled?: (value: T) => unknown): unknown
}

type PromiseValue<T> = T extends PromiseLike<infer U> ? U : T

type Props = {
  events: Event[]
  committees: Committee[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      events: getEventProps(),
      committees: getCommitteeProps(),
    },
  }
}

const IndexPage: React.FC<Props> = ({ events, committees }) => (
  <>
    <NavbarLayout>
      <Navbar />
    </NavbarLayout>
    <SplashLayout>
      <Splash />
    </SplashLayout>
    <BodyLayout>
      <Stats />
      <BlurbComp />
      <EventComp events={events} />
      <Banner src="banner1.jpg" />
      <SponsorComp />
      <CompanyComp />
      <Banner src="banner2.jpg" />
      <UniversityComp />
      <Banner src="banner3.jpg" />
      <AboutUs />
      <CommitteeComp committees={committees} />
      <Banner src="banner4.jpg" />
      <Footer />
    </BodyLayout>
  </>
)

export default IndexPage
