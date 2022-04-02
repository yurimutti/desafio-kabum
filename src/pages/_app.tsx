import { AppProps } from 'next/app'
import Header from '../components/Header'

import { CartContextProvider } from '../contexts/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CartContextProvider >
      <Header />
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp

