import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartSvg from '../../../CartSvg'
import { CartContext } from '../../../../contexts/CartContext'

import { BuyButton } from './styles'

type CartTypes = {
  cart: number;
  setCart(arg1: number): number;
}

const index = () => {
  const { cart, setCart } = useContext(CartContext) as CartTypes 

  const notify = () => {
    toast.success("Produto Adicionado!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  function handleClick() {
    setCart(cart + 1)

    notify()
  }

  return (
    <BuyButton onClick={handleClick}>
      <ToastContainer />
      <CartSvg width={28} height={28} /> COMPRAR
    </BuyButton>
  )
}

export default index