import { Events } from '../components/Events'
import { Navbar } from '../components/Navbar'
import { Splash } from '../components/Splash'
import { SplashLayout, BodyLayout, NavbarLayout } from '../components/Layout'
import { Stats } from '../components/Stats'

const IndexPage = () => (
  <div>
    <NavbarLayout>
      <Navbar />
    </NavbarLayout>
    <SplashLayout>
      <Splash />
    </SplashLayout>
    <BodyLayout>
      <Stats />
      <Events />
    </BodyLayout>
  </div>
)

export default IndexPage
