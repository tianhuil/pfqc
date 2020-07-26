import { Splash } from '../components/Splash'
import { Navbar } from '../components/Navbar'
import { Events } from '../components/Events'
import { SplashLayout, BodyLayout, NavbarLayout } from '../components/Layout'

const IndexPage = () => (
  <div>
    <NavbarLayout>
      <Navbar />
    </NavbarLayout>
    <SplashLayout>
      <Splash />
    </SplashLayout>
    <BodyLayout>
      <Events />
    </BodyLayout>
  </div>
)

export default IndexPage
