import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return(
      <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,500&display=swap" rel="stylesheet" />
        <meta name="description" content="Encontre as melhores ofertas em Tecnologia e Games aqui no KaBuM!. Confira nossa linha de Hardware, Smartphones, Computadores, Eletrônicos e mais. Acesse!" />
        <meta name="author" content="KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina" />
        <meta name="keywords" content="kabum, kabum loja, loja online, kabum referencias, kabum opinioes, kabum alguem ja comprou, kabum é boa, kabum seguro, kabum é confiavel, kabum.com.br, www.kabum.com.br, informatica, loja on-line, hardware" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}