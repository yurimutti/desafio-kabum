import { AppProps } from 'next/app'
import Header from '../components/Header'

import { ToastContainer } from 'react-toastify';

import { UserContextProvider } from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <UserContextProvider >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
      <Header />
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp

