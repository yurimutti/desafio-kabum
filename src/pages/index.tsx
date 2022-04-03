import Head from 'next/head'
import { createServer } from 'miragejs'
import Main from '../components/Main'


import GlobalStyles from '../styles/global'

createServer({
  routes() {
    this.get("/api/products", () => ([
      {
        id: 1,
        manufacturer: 'FABRICANTE',
        name: "Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX, DDR4",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-01.jpg',
        shipping: [
          'FRETE GRÁTIS',
          'OPEN BOX'
        ]
      },
      {
        id: 2,
        manufacturer: 'FABRICANTE',
        name: "Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-02.jpg',
        shipping: []
      },
      {
        id: 3,
        manufacturer: 'FABRICANTE',
        name: "Memória HyperX Fury, 8GB, 2400MHz, DDR4, CL15, Preto...",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-03.jpg',
        shipping: [
          'FRETE GRÁTIS',
          'OPEN BOX'
        ]
      },
      {
        id: 4,
        manufacturer: 'FABRICANTE',
        name: "Headset Gamer HyperX Cloud Stinger - HX-HSCS-BK/NA",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-04.jpg',
        shipping: []
      },
      {
        id: 5,
        manufacturer: 'FABRICANTE',
        name: "Amazon Smart Home Echo Dot Alexa, 3ª Geração, Preto",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-05.jpg',
        shipping: [
          'FRETE GRÁTIS',
          'OPEN BOX'
        ]
      },
      {
        id: 6,
        manufacturer: 'FABRICANTE',
        name: "Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz Max",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-02.jpg',
        shipping: []
      },
      {
        id: 7,
        manufacturer: 'FABRICANTE',
        name: "Memória HyperX Fury, 8GB, 2400MHz, DDR4, CL15, Preto...",
        oldPrice: 38099,
        price: 28090,
        imageUrl: 'images/product-03.jpg',
        shipping: []
      },
    ]))
  },
})

export default function Home() {
  return (
    <>
      <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
        <title>KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina</title>
      </Head>
      <GlobalStyles />
      <Main />
    </>
    )
}

