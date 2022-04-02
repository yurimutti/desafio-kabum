import { createContext, useState } from 'react'
import axios from 'axios'

export const CartContext = createContext({})

export const CartContextProvider = ( { children } ) => {
  const [cart,setCart] = useState<number>(0)

  return(
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

