import { Header, Container } from './styles'

import Search from './Search'
import SignInArea from './SignInArea'
import Links from './Links'

function index() {
  return (
    <Header>
      <Container>
        <a>Menu</a>
        <a>Logo</a>
        <Search />
        <SignInArea />
        <Links />
      </Container>
    </Header>
  )
}

export default index