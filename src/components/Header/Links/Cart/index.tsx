import { useContext } from 'react'
import CartSvg from '../../../CartSvg'
import { UserContext } from '../../../../contexts/UserContext'
import Count from './Count'

import { CartWrapper } from './styles'

type CartTypes = {
  cart: number;
  setCart(arg1: number): number;
}

function Cart() {
  const { cart } = useContext(UserContext) as CartTypes
  
  return (
    <CartWrapper>
      <CartSvg />
      {cart > 0 && <Count>{cart}</Count>} 
    </CartWrapper>
  )
}

export default Cart
