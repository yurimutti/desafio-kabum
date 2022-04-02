import Notifications from './Notifications'
import Favorites from './Favorites'
import Cart from './Cart'

import { Div } from './styles'


function index() {
  return (
    <Div>
      <Notifications />
      <Favorites />
      <Cart />
    </Div>
  )
}

export default index