import React, { useContext, useState } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartSvg from '../../../CartSvg'
import { UserContext } from '../../../../contexts/UserContext'

import { BuyButton } from './styles'

type CartTypes = {
  cart: number;
  setCart(arg1: number): number;
}

type IdProps = {
  id: number
}

const index = ({ id }: IdProps) => {
  const { cart, setCart } = useContext(UserContext) as CartTypes 
  const [ ids, setIds ] = React.useState<number[]>([])

  function getStock() {
    const checkStock = ids.filter((item) => {
      return item == id
    }).length

    return checkStock + 1
  }
  
  function handleClick() {  
    if(getStock() <= 5) {
      setIds([...ids, id])
      setCart(cart + 1)
      toast.success('produto adicionado');
    } else {
      toast.error('produto sem estoque');
    }
  }

  return (
    <BuyButton onClick={handleClick}>
      <CartSvg width={28} height={28} /> COMPRAR
    </BuyButton>
  )
}

export default index