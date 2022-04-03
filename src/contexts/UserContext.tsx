import { createContext, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ( { children } ) => {
  const [cart,setCart] = useState<number>(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return(
    <UserContext.Provider value={{cart, setCart, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}
