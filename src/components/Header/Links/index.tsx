import Notifications from './Notifications'
import Wishlist from './Wishlist'
import Cart from './Cart'

import { Div } from './styles'


function index() {
  return (
    <Div>
      <Notifications />
      <Wishlist />
      <Cart />
    </Div>
  )
}

export default index