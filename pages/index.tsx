import { EventComp } from '../components/Events'
import { Navbar } from '../components/Navbar'
import { Splash } from '../components/Splash'
import { SplashLayout, BodyLayout, NavbarLayout } from '../components/Layout'
import { Stats } from '../components/Stats'
import { getEventProps } from '../lib/events'
import { CompanyComp } from '../components/Company'
import { UniversityComp } from '../components/University'

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
      <CompanyComp />
      <UniversityComp />
    </BodyLayout>
  </>
)

export default IndexPage
