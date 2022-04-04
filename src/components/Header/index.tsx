import { HeaderElement, Container } from './styles'

import Menu from './Menu'
import MenuExpansive from './MenuExpansive'
import Logo from './Logo'
import Search from './Search'
import SignInArea from './SignInArea'
import Links from './Links'

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderElement>
        <Container>
          <Menu />
          <Logo />
          <Search />
          <SignInArea />
          <Links />
        </Container>
      </HeaderElement>
      <MenuExpansive />
    </>
  )
};

export default Header