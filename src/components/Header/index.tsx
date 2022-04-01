import { Header, Container } from './styles'

import Menu from './Menu'
import MenuExpansive from './MenuExpansive'
import Logo from './Logo'
import Search from './Search'
import SignInArea from './SignInArea'
import Links from './Links'

function index() {
  return (
    <>
      <Header>
        <Container>
          <Menu />
          <Logo />
          <Search />
          <SignInArea />
          <Links />
        </Container>
      </Header>
      <MenuExpansive />
    </>
  )
}

export default index