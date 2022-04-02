import { useContext } from 'react'
import CartSvg from '../../../CartSvg'
import { CartContext } from '../../../../contexts/CartContext'
import Count from './Count'

import { CartWrapper } from './styles'

type CartTypes = {
  cart: number;
  setCart(arg1: number): number;
}

function Cart() {
  const { cart } = useContext(CartContext) as CartTypes
  
  return (
    <CartWrapper>
      <CartSvg />
      <Count>{cart}</Count>
    </CartWrapper>
  )
}

export default Cart
