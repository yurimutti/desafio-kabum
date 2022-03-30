import Head from 'next/head'


import Main from '../components/Main'

import GlobalStyles from '../styles/global'


export default function Home() {
  return (
    <>
      <Head>
        <title>KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina</title>
      </Head>
      <GlobalStyles />
      <Main />
      <h1>HelloWord</h1>
    </>
    )
}
