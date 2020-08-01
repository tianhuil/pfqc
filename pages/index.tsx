import { EventComp } from '../components/Events'
import { Navbar } from '../components/Navbar'
import { Splash } from '../components/Splash'
import { SplashLayout, BodyLayout, NavbarLayout } from '../components/Layout'
import { Stats } from '../components/Stats'
import { getEventProps } from '../lib/events'
import { CompanyComp } from '../components/Company'
import { UniversityComp } from '../components/University'
import { Banner } from '../components/Banner'
import { AboutUs } from '../components/AboutUs'
import { Footer } from '../components/Footer'

type PromiseLike<T> = {
  then(onfulfilled?: (value: T) => unknown): unknown
}

type PromiseValue<T> = T extends PromiseLike<infer U> ? U : T

export const getStaticProps = async () => {
  return {
    props: { events: getEventProps() },
  }
}

type Props = PromiseValue<ReturnType<typeof getStaticProps>>['props']

const IndexPage: React.FC<Props> = ({ events }) => (
  <>
    <NavbarLayout>
      <Navbar />
    </NavbarLayout>
    <SplashLayout>
      <Splash />
    </SplashLayout>
    <BodyLayout>
      <Stats />
      <EventComp events={events} />
      <Banner src="banner1.jpg" />
      <CompanyComp />
      <Banner src="banner2.jpg" />
      <UniversityComp />
      <Banner src="banner3.jpg" />
      <AboutUs />
      <Banner src="banner4.jpg" />
      <Footer />
    </BodyLayout>
  </>
)

export default IndexPage
